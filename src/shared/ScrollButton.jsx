import { Button } from "@mui/material";
import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ScrollButton() {
  const [visible, setVisible] = useState("hidden");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled < 350 ? setVisible("hidden") : setVisible("visible");
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <Button
        sx={{
          width: "40px",
          height: "40px",
          position: "fixed",
          left: "25px",
          bottom: "40px",
          visibility: `${visible}`,
        }}
        className={visible ? "show-scroll-btn" : "hide-scroll-btn"}
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
      >
        <ArrowUpwardIcon />
      </Button>
    </>
  );
}

export default ScrollButton;
