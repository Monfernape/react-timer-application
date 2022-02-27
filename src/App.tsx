import { useState, useEffect } from "react";
import { Grid, Typography, Snackbar } from "@mui/material";
import { useTimer } from "./hooks";
import { TimerSlots, RemainingTimer, TimerActions } from "./components";
import { Timer, TimerStatus } from "./types";

export default function App() {
  const [timer, setTimer] = useState<Timer>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [timerStatus, setTimerStatus] = useState<TimerStatus>("reset");
  const [showSnackbar, setSnackbarStatus] = useState(false);
  const { timerSlots, setTimerSlots } = useTimer(timerStatus, timer);

  /**
   * Checks the timer value on each render.
   * Stops timer if timer accomplishes its required value
   * Also I failed at this: https://twitter.com/joelnet/status/1375846660580941828
   */
  useEffect(() => {
    if (timerSlots.remainingTime === 0 && timerStatus === "running") {
      setTimerStatus("reset");
      setTimerSlots({ hours: 0, minutes: 0, seconds: 0, remainingTime: 0 });
      setTimer({ hours: 0, minutes: 0, seconds: 0 });
      setSnackbarStatus(true);
    }
  }, [timerSlots.remainingTime]);

  const handleTimerStart = () => {
    setTimerStatus("running");
  };

  const toggleTimerStatus = () => {
    if (timerStatus === "running") {
      setTimerStatus("stopped");
    } else {
      setTimerStatus("running");
    }
  };

  const handleTimerReset = () => {
    setTimerStatus("reset");
    setTimerSlots({ hours: 0, minutes: 0, seconds: 0, remainingTime: 0 });
    setTimer({ hours: 0, minutes: 0, seconds: 0 });
    setSnackbarStatus(false);
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={0} sm={3}></Grid>
      <Grid item xs={12} sm={6} container gap={2}>
        <Typography variant={"h1"}>React Timer</Typography>
        <TimerSlots
          timer={timer}
          setTimer={setTimer}
          timerStatus={timerStatus}
        />
        <TimerActions
          timerStatus={timerStatus}
          timer={timer}
          handleTimerStart={handleTimerStart}
          handleTimerReset={handleTimerReset}
          toggleTimerStatus={toggleTimerStatus}
        >
          <RemainingTimer timerSlots={timerSlots} />
        </TimerActions>
      </Grid>
      <Grid xs={0} sm={3}></Grid>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        message="Time Over"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Grid>
  );
}
