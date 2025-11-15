import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({name, duration}: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const interval = useRef<number | null>(null);
  const { isRunning } = useTimersContext()

  useEffect(() => {
    let timer: number;

    if(isRunning) {
      timer = setInterval(function(){
        setRemainingTime(prevTime => {
          if(prevTime <= 0) {
            return prevTime;
          }

          return prevTime - 50
        })
      }, 50)

      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  if(remainingTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  return (
    <Container as="article">
      <h2>{name}</h2>
      <progress value={remainingTime} max={duration * 1000} />
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
