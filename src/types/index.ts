export type TimerStatus = "running" | "stopped" | "reset";

export type Timer = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type TimerSlot = Timer & { remainingTime: number };
