import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";

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
          fontWeight={700}
          fontSize={25}
          mt={10}
          py={3}
        >
          پروژه وبلاگ
        </Typography>
        <Typography
          component="p"
          variant="p"
          textAlign="center"
          bgcolor="#f7f7f7"
          pb={5}
        >
          <Link to="https://t.me/KhalilHashemi8" target="_blank">
            <Button sx={{ borderRadius: "10px" }}>
              <InstagramIcon sx={{ fontSize: "30px", paddingY: "8px" }} />
            </Button>
          </Link>
          <Link to="https://telegram.org/khalilhashemi8" target="_blank">
            <Button sx={{ borderRadius: "10px" }}>
              <TelegramIcon sx={{ fontSize: "30px", paddingY: "8px" }} />
            </Button>
          </Link>
          <Link to="https://github.com/KhalilHashemi" target="_blank">
            <Button sx={{ borderRadius: "10px" }}>
              <GitHubIcon sx={{ fontSize: "30px", paddingY: "8px" }} />
            </Button>
          </Link>
          <Link
            to="https://www.linkedin.com/in/khalil-hashemi-049b6b219"
            target="_blank"
          >
            <Button sx={{ borderRadius: "10px" }}>
              <LinkedInIcon sx={{ fontSize: "30px", paddingY: "8px" }} />
            </Button>
          </Link>
        </Typography>
        <Typography
          component="p"
          variant="p"
          textAlign="center"
          bgcolor="#f7f7f7"
          pb={5}
          color="secondary"
        >
          خلیل هاشمی | © 2024 All rights reserved
        </Typography>
      </footer>
      {/*----------------------------- </footer> ---------------------------*/}
    </>
  );
}

export default Layout;
