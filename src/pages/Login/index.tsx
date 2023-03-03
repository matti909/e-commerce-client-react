import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validationForm";
import { useFormik } from "formik";

type LoginType = {
  username: string;
  password: string;
};

const Login: React.FC<{}> = () => {
  const { getSuccess } = useNotification();
  const formik = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
    }
  })

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: ".5em" }}>
            <Typography
              sx={{ padding: "1.5em", borderRadius: "0.5em" }}
              variant="h4"
            >
              Iniciar sesion
            </Typography>
            <Box onSubmit={formik.handleSubmit} component="form">
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: "2em", mb: "1.5em" }}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: "1.5em", mb: "1.5em" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
