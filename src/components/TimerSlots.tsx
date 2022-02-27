import { TextField, InputAdornment, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Timer, TimerStatus } from "../types";

type Props = {
  timer: Timer;
  timerStatus: TimerStatus;
  setTimer: (data: Timer) => void;
};

export const TimerSlots = ({ timer, setTimer, timerStatus }: Props) => {
  if (timerStatus === "reset") {
    return (
      <Grid container item direction={"column"} gap={2}>
        <TextField
          id="input-with-icon-textfield"
          label="Hours"
          type={"number"}
          value={timer.hours}
          onChange={(event) =>
            setTimer({ ...timer, hours: Number(event.target.value) })
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            )
          }}
          variant={"outlined"}
        />

        <TextField
          id="input-with-icon-textfield"
          label="Minutes"
          type={"number"}
          value={timer.minutes}
          onChange={(event) =>
            setTimer({ ...timer, minutes: Number(event.target.value) })
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            )
          }}
          variant={"outlined"}
        />

        <TextField
          id="input-with-icon-textfield"
          label="Seconds"
          type={"number"}
          value={timer.seconds}
          onChange={(event) =>
            setTimer({ ...timer, seconds: Number(event.target.value) })
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            )
          }}
          variant={"outlined"}
        />
      </Grid>
    );
  } else return null;
};
