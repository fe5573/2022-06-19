import { useEffect, useRef } from 'react'

import animate from '@/utils/animate'

import { AtLeast } from '../../types'

type Props = AtLeast<
  {
    start: number
    end: number
    duration: number
    timingFunction: 'linear' | 'ease-in' | 'ease-out'
  },
  'end'
>

const AnimateCounter = ({
  start = 0,
  end,
  duration = 2000,
}: AtLeast<Props, 'end'>) => {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    animate({
      timing: (timeFraction) => {
        return timeFraction >= 1 ? 1 : 1 - 2 ** (-10 * timeFraction)
      },
      draw: (progress) => {
        const $counter = counterRef.current
        $counter && ($counter.textContent = `${Math.floor(end * progress)}`)
      },
      duration,
    })
  }, [end, duration])

  return <span ref={counterRef}>{start}</span>
}

export default AnimateCounter
