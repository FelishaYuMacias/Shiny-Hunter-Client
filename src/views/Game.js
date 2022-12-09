import '../engine/main'

const Game = () => {
  const style = {
    width: 1024,
    height: 768,
    background: 'white',
    border: '1px solid black'
  }

  return (
    <div id="game-canvas">
      <canvas id="gameWorld" style={style} tabIndex="0" autoFocus />
    </div>
  )
}

export default Game