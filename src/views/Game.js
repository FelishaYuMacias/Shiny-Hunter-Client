import Canvas from '../game/Canvas'

const draw = (ctx) => {
  const image = new Image()
  image.src = '/img/map.png'
  image.onload = () => {
    ctx.drawImage(image, 0, 0)
  }
}

const Game = () => {
  return (
    <Canvas draw={draw} width={1024} height={768} />
  )
}

export default Game