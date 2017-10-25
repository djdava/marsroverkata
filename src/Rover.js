class Rover {
  constructor (x, y, orientation) {
    this.position = {
      x: x,
      y: y,
      orientation: orientation
    }
  }

  move (commands) {
    commands.forEach((command) => {
      var commandRules = {
        f: this.forward,
        b: this.backward,
        l: this.left,
        r: this.right
      }

      commandRules[command].call(this)
    })

    return 'ok'
  }

  left () {
    this.position.orientation = 'S'
  }

  right () {
    this.position.orientation = 'N'
  }

  forward () {
    if (this.position.orientation == 'N')
      this.position.y++

    if (this.position.orientation == 'S')
      this.position.y--

    if (this.position.orientation == 'E')
      this.position.x++

    if (this.position.orientation == 'W')
      this.position.x--
  }

  backward () {
    if (this.position.orientation == 'N')
      this.position.y--

    if (this.position.orientation == 'S')
      this.position.y++

    if (this.position.orientation == 'E')
      this.position.x--

    if (this.position.orientation == 'W')
      this.position.x++
  }

}
