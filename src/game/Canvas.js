import { useEffect, useRef } from 'react'

const Canvas = ({ draw, height, width }) => {
  const canvas = useRef()

  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    draw(ctx)
  })

  const style = {
    background: 'white',
    border: '1px solid black'
  }

  return <canvas ref={canvas} width={width} height={height} style={style} tabIndex="0" autoFocus />
}

export default Canvas