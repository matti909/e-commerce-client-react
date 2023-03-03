import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handlClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handlClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
      open={open}
			onClose={handlClose}
    >
      <Alert onClose={handlClose} severity={severity}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
