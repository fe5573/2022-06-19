interface Args {
  timing: (timeFraction: number) => number
  draw: (progress: number) => void
  duration: number
}

const animate = ({ timing, draw, duration }: Args) => {
  const start = performance.now()

  requestAnimationFrame(function animate(time) {
    // timeFraction은 0에서 1사이의 값이 됩니다
    let timeFraction = (time - start) / duration
    if (timeFraction >= 1) {
      timeFraction = 1
    }

    const progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}

export default animate
