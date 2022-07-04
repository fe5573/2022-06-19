import { useEffect, useRef } from 'react'

import animate from '@/utils/animate'

import { MakeOptional } from '../../types'

type Props = MakeOptional<
  {
    start: number
    end: number
    duration: number
  },
  'end'
>

const AnimateCounter = ({ start = 0, end, duration = 2000 }: Props) => {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    return animate({
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
