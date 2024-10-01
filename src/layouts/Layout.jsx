import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <>
      {/*----------------------------- <header> ---------------------------*/}
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Container maxWidth="lg" bgcolor="#921A40">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              flex={1}
              onClick={() => navigate("/")}
            >
              پروژه وبلاگ
            </Typography>
            <BookIcon
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
      {/*----------------------------- </header> ---------------------------*/}
      {children}
      {/*----------------------------- <footer> ---------------------------*/}
      <footer>
        <Typography
          component="p"
          variant="p"
          bgcolor="#f7f7f7"
          color="primary"
          padding="10px"
          textAlign="center"
          mt={10}
        >
          پروژه وبلاگ | خلیل هاشمی
        </Typography>
      </footer>
      {/*----------------------------- </footer> ---------------------------*/}
    </>
  );
}

export default Layout;
