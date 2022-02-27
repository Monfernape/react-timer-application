import { useState, useEffect } from "react";
import { TimerStatus, Timer, TimerSlot } from "../types";

const secondsToTime = (secs: number) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);
  let remainingTime = secs - 1;

  let obj = {
    hours,
    minutes,
    seconds,
    remainingTime
  };
  return obj;
};

export const useTimer = (timerStatus: TimerStatus, timer: Timer) => {
  const [timerSlots, setTimerSlots] = useState<TimerSlot>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    remainingTime: 0
  });

  const totalTimerRunningLength =
    timerSlots.remainingTime === 0
      ? timer.hours * 60 * 60 + timer.minutes * 60 + timer.seconds
      : timerSlots.remainingTime;

  useEffect(() => {
    let timeInterval: number | null = null;
    if (timerStatus === "running") {
      timeInterval = setInterval(() => {
        setTimerSlots(secondsToTime(totalTimerRunningLength));
      }, 1000);
    } else {
      clearInterval((timeInterval as unknown) as number);
    }

    return () => {
      clearInterval((timeInterval as unknown) as number);
    };
  }, [timerStatus, totalTimerRunningLength]);

  return { timerSlots, setTimerSlots };
};
