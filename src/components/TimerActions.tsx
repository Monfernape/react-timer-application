import { FC } from "react";
import { Button, Grid } from "@mui/material";
import { TimerStatus, Timer } from "../types";

type Props = {
  timer: Timer;
  timerStatus: TimerStatus;
  handleTimerStart: () => void;
  handleTimerReset: () => void;
  toggleTimerStatus: () => void;
};

export const TimerActions: FC<Props> = ({
  timerStatus,
  timer,
  children,
  handleTimerStart,
  handleTimerReset,
  toggleTimerStatus
}) => {
  const isTimerStartDisabled =
    timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0;

  return (
    <Grid container item>
      {timerStatus === "reset" ? (
        <Grid item width={"100%"}>
          <Button
            disabled={isTimerStartDisabled}
            onClick={handleTimerStart}
            variant={"contained"}
            fullWidth
          >
            Start
          </Button>
        </Grid>
      ) : (
        <Grid container item width={"100%"} direction={"column"} spacing={4}>
          <Grid item>{children}</Grid>
          <Grid item container justifyContent={"space-between"} spacing={3}>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={toggleTimerStatus}
                variant={"contained"}
              >
                {timerStatus === "stopped" ? "Resume" : "Stop"}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={handleTimerReset}
                variant={"contained"}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
