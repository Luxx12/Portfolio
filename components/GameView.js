'use client'
// 
import { useEffect, useRef, useState } from 'react'

export default function GameView() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  
  const gameStateRef = useRef({
    player: {
      x: 50,
      y: 150,
      width: 30,
      height: 40,
      velocityY: 0,
      jumping: false,
      ducking: false,
      groundY: 150
    },
    obstacles: [],
    frameCount: 0,
    gameSpeed: 6,
    score: 0
  })

  const colors = {
    player: '#4da6ff',
    obstacle: '#4dff91',
    flying: '#e0e6f0',
    ground: '#1e3a5f',
    text: '#e0e6f0',
    bg: '#0a1628'
  }

  useEffect(() => {
    const saved = localStorage.getItem('terminalGameHighScore')
    if (saved) setHighScore(parseInt(saved))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationId
    const gravity = 0.8
    const jumpForce = -14
    const state = gameStateRef.current

    // Wait for font to load
    document.fonts.ready.then(() => {
      draw()
    })

    function drawPlayer() {
      ctx.fillStyle = colors.player
      const height = state.player.ducking ? 20 : state.player.height
      const y = state.player.ducking ? state.player.groundY + 20 : state.player.y
      ctx.fillRect(state.player.x, y, state.player.width, height)
      ctx.fillStyle = colors.text
      ctx.fillRect(state.player.x + 20, y + 8, 6, 6)
    }

    function drawObstacles() {
      state.obstacles.forEach(obs => {
        if (obs.type === 'high') {
          ctx.fillStyle = colors.flying
          ctx.fillRect(obs.x, obs.y, obs.width, obs.height)
          ctx.fillRect(obs.x + 10, obs.y - 8, 25, 8)
          ctx.fillRect(obs.x + 15, obs.y + obs.height, 20, 8)
        } else {
          ctx.fillStyle = colors.obstacle
          ctx.fillRect(obs.x, obs.y, obs.width, obs.height)
          if (obs.height > 30) {
            ctx.fillRect(obs.x - 8, obs.y + 15, 8, 10)
            ctx.fillRect(obs.x + obs.width, obs.y + 10, 8, 10)
          }
        }
      })
    }

    function drawGround() {
      ctx.fillStyle = colors.ground
      ctx.fillRect(0, 190, canvas.width, 2)
      for (let i = 0; i < canvas.width + 40; i += 40) {
        const xPos = i - (state.frameCount * state.gameSpeed / 2) % 40
        if (xPos > -15 && xPos < canvas.width) {
          ctx.fillRect(xPos, 195, 15, 2)
        }
      }
    }

    function drawScore() {
      ctx.fillStyle = colors.text
      ctx.font = "16px 'JetBrains Mono', monospace"
      ctx.fillText(`Score: ${state.score}`, canvas.width - 120, 30)
    }

    function spawnObstacle() {
      const types = ['ground', 'ground', 'ground', 'high']
      const type = types[Math.floor(Math.random() * types.length)]
      
      if (type === 'high') {
        state.obstacles.push({
          x: canvas.width,
          y: 70 + Math.random() * 40,
          width: 50,
          height: 40,
          type: 'high'
        })
      } else {
        const height = 25 + Math.random() * 25
        state.obstacles.push({
          x: canvas.width,
          y: 190 - height,
          width: 15 + Math.random() * 15,
          height: height,
          type: 'ground'
        })
      }
    }

    function checkCollision() {
      const playerHeight = state.player.ducking ? 20 : state.player.height
      const playerY = state.player.ducking ? state.player.groundY + 20 : state.player.y
      
      for (let obs of state.obstacles) {
        if (state.player.x < obs.x + obs.width &&
            state.player.x + state.player.width > obs.x &&
            playerY < obs.y + obs.height &&
            playerY + playerHeight > obs.y) {
          return true
        }
      }
      return false
    }

    function update() {
      state.frameCount++
      
      if (!state.player.ducking) {
        state.player.velocityY += gravity
        state.player.y += state.player.velocityY
        
        if (state.player.y >= state.player.groundY) {
          state.player.y = state.player.groundY
          state.player.velocityY = 0
          state.player.jumping = false
        }
      }
      
      if (state.frameCount % Math.max(60, 120 - Math.floor(state.score / 10)) === 0) {
        spawnObstacle()
      }
      
      state.obstacles.forEach(obs => {
        obs.x -= state.gameSpeed
      })
      
      state.obstacles = state.obstacles.filter(obs => obs.x + obs.width > 0)
      
      if (state.frameCount % 5 === 0) {
        state.score++
        setScore(state.score)
      }
      
      if (state.score % 100 === 0 && state.score > 0) {
        state.gameSpeed = Math.min(15, 6 + state.score / 100)
      }
      
      if (checkCollision()) {
        endGame()
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGround()
      drawPlayer()
      drawObstacles()
      drawScore()
    }

    function gameLoop() {
      if (gameRunning) {
        update()
        draw()
        animationId = requestAnimationFrame(gameLoop)
      }
    }

    function endGame() {
      setGameRunning(false)
      setGameOver(true)
      
      if (state.score > highScore) {
        setHighScore(state.score)
        localStorage.setItem('terminalGameHighScore', state.score.toString())
      }
      
      ctx.fillStyle = 'rgba(10, 22, 40, 0.8)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = colors.text
      ctx.font = "24px 'JetBrains Mono', monospace"
      ctx.fillText('GAME OVER', canvas.width / 2 - 80, 100)
      ctx.font = "16px 'JetBrains Mono', monospace"
      ctx.fillText(`Final Score: ${state.score}`, canvas.width / 2 - 70, 130)
    }

    if (gameRunning) {
      gameLoop()
    } else {
      draw()
    }

    const handleKeyDown = (e) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && gameRunning) {
        e.preventDefault()
        if (!state.player.jumping && state.player.y >= state.player.groundY) {
          state.player.velocityY = jumpForce
          state.player.jumping = true
          state.player.ducking = false
        }
      }
      if (e.code === 'ArrowDown' && gameRunning) {
        e.preventDefault()
        if (!state.player.jumping) {
          state.player.ducking = true
        }
      }
    }

    const handleKeyUp = (e) => {
      if (e.code === 'ArrowDown') {
        state.player.ducking = false
      }
    }

    let touchHoldTimer = null

    const handleTouchStart = (e) => {
      e.preventDefault()
      if (!gameRunning) return
      
      touchHoldTimer = setTimeout(() => {
        if (!state.player.jumping) {
          state.player.ducking = true
        }
      }, 150)
      
      if (!state.player.jumping && state.player.y >= state.player.groundY) {
        state.player.velocityY = jumpForce
        state.player.jumping = true
        state.player.ducking = false
      }
    }

    const handleTouchEnd = (e) => {
      e.preventDefault()
      if (touchHoldTimer) {
        clearTimeout(touchHoldTimer)
        touchHoldTimer = null
      }
      state.player.ducking = false
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [gameRunning, highScore])

  function startGame() {
    const state = gameStateRef.current
    state.player.y = state.player.groundY
    state.player.velocityY = 0
    state.player.jumping = false
    state.player.ducking = false
    state.obstacles = []
    state.score = 0
    state.frameCount = 0
    state.gameSpeed = 6
    setScore(0)
    setGameOver(false)
    setGameRunning(true)
  }

  return (
    <div className="text-center">
      <pre className="ascii-art text-terminal-accent mb-5">
{`██████╗  ██████╗  █████╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗██╔══██╗
██████╔╝██║   ██║███████║██║  ██║
██╔══██╗██║   ██║██╔══██║██║  ██║
██║  ██║╚██████╔╝██║  ██║██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ 
██████╗ ██╗   ██╗███╗   ██╗███╗   ██╗███████╗██████╗ 
██╔══██╗██║   ██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
██████╔╝██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
██╔══██╗██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
██║  ██║╚██████╔╝██║ ╚████║██║ ╚████║███████╗██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝`}
      </pre>

      <div className="game-container flex flex-col items-center gap-5">
        <div className="flex gap-10 md:gap-20 text-base">
          <span>Score: <span className="text-terminal-accent">{score}</span></span>
          <span>High Score: <span className="text-terminal-accent">{highScore}</span></span>
        </div>

        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="border-2 border-terminal-border bg-terminal-bg w-full max-w-[350px] md:max-w-[600px] h-auto"
        />

        <button
          onClick={startGame}
          disabled={gameRunning}
          className="bg-transparent border-2 border-terminal-accent text-terminal-accent py-2 px-5 cursor-pointer transition-all hover:bg-terminal-accent hover:text-terminal-bg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {gameOver ? 'Play Again' : gameRunning ? 'Playing...' : 'Start Game'}
        </button>

        <p className="text-terminal-dim text-sm">
          Press <span className="text-terminal-accent-bright">SPACE</span> or <span className="text-terminal-accent-bright">UP</span> to jump | <span className="text-terminal-accent-bright">DOWN</span> to duck
        </p>
        <p className="text-terminal-dim text-xs">
          On mobile: <span className="text-terminal-accent-bright">TAP</span> to jump | <span className="text-terminal-accent-bright">TAP & HOLD</span> to duck
        </p>
      </div>
    </div>
  )
}
