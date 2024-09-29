import { useMutation } from "@apollo/client";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  console.log(data);

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.error("! تمام فیلد ها را پر کنید", { position: "top-center" });
    }
  };

  if (data) {
    toast.success("کامنت شما ارسال شد و منتظر تایید می باشد.", {
      position: "top-center",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1)  0  4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h5" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2} sx={{ direction: "rtl", textAlign: "right" }}>
        <TextField
          id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          value={name}
          fullWidth
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{
            style: {
              right: 0,
              left: "auto",
              marginRight: 25,
              paddingLeft: "20px",
              maxWidth: 'fit-content',
              backgroundColor: "#fff",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                textAlign: "right",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="ایمیل"
          variant="outlined"
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            style: {
              right: 0,
              left: "auto",
              marginRight: 25,
              paddingLeft: "20px",
              backgroundColor: "#fff",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                textAlign: "right",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="متن کامنت"
          variant="outlined"
          value={text}
          fullWidth
          onChange={(e) => setText(e.target.value)}
          InputLabelProps={{
            style: {
              right: 0,
              left: "auto",
              marginRight: 25,
              paddingLeft: "20px",
              backgroundColor: "#fff",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                textAlign: "right",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
