import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      {/*----------------------------- <header> ---------------------------*/}
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Container maxWidth="lg" bgcolor="#921A40">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              flex={1}
            >
              پروژه وبلاگ
            </Typography>
            <BookIcon />
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
