import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ height: "325px" }}>
      <Grid container mt={15}>
        <Grid item xs={6}>
          <img src="../../public/404.webp" alt="Page Not Found" width="100%" />
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          textAlign="center"
        >
          <Typography component="div" variant="h4" fontWeight={700}>
            صفحه مورد نظر شما پیدا نشد !
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/")}>
            برگشت به صفحه اصلی
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PageNotFound;
