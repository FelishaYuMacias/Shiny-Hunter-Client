import { useEffect, useRef, useState } from 'react'

const Canvas = ({ width, height }) => {
  const canvas = useRef()
  const [ctx, setCtx] = useState(null)
  const [x, setX] = useState(7)
  const [y, setY] = useState(13)
  const [animX, setAnimX] = useState(0)

  const background = new Image()
  background.src = '/img/map.png'
  background.onload = () => {
    ctx.drawImage(background, 0, 0)
  }

  const image = new Image()
  image.src = '/img/player.png'
  image.onload = () => {
    ctx.drawImage(image, animX, 6, 30, 42, x * 32, y * 32 - 8, 30, 42)
  }

  const detectKeyDown = (e) => {
    if (e.key === 'w') {
      setY((y) => y - 1)
    } else if (e.key === 's') {
      setY((y) => y + 1)
    } else if (e.key === 'a') {
      setX((x) => x - 1)
    } else if (e.key === 'd') {
      setX((x) => x + 1)
    }
  }

  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    setCtx(ctx)

    let frame = 0
    let frameId

    document.addEventListener('keydown', detectKeyDown, true)

    const tick = () => {
      frame++
      gameLoop(frame)
      frameId = requestAnimationFrame(tick)
    }

    const gameLoop = (frame) => {
      setAnimX(frame % 96)
    }

    tick()
    return () => cancelAnimationFrame(frameId)
  }, [])

  const style = {
    background: 'white',
    border: '1px solid black',
    transform: 'scale(2) translateY(30%)',
    imageRendering: 'pixelated'
  }

  return (
    <canvas ref={canvas} width={width} height={height} style={style} tabIndex="0" autoFocus />
  )
}

export default Canvas