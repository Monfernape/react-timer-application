import { Avatar, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { TimerSlot } from "../types";

type Props = {
  timerSlots: TimerSlot;
};

export const RemainingTimer = ({ timerSlots }: Props) => {
  return (
    <Grid container justifyContent={"space-evenly"}>
      <Avatar sx={{ width: 100, height: 100, bgcolor: blue[500] }}>
        {timerSlots.hours}
      </Avatar>
      <Avatar sx={{ width: 100, height: 100, bgcolor: blue[500] }}>
        {timerSlots.minutes}
      </Avatar>
      <Avatar sx={{ width: 100, height: 100, bgcolor: blue[500] }}>
        {timerSlots.seconds}
      </Avatar>
    </Grid>
  );
};
