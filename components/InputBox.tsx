import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const InputBox = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          bottom: 0,
          left: 0,
          paddingX: "1rem",
          background: "#1E293B",
          height: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          autoComplete="on"
          sx={{
            width: "96%",
            height: "50%",
            // padding: "0.9rem",
            background: "#334155",
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            borderRadius: 4,
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="ask anything!"
            multiline
            color="error"
            sx={{
              input: {
                cursor: "pointer",
                color: "primary",
                background: "green",
              },
              color: "blue",
              width: "100%",
              height: "100%",
              border: "none",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none",
                },
                "& .MuiOutlinedInput-input": {
                  color: "white",
                },
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              height: "2.3rem",
              minWidth: "unset",
              width: "2.7rem",
              borderRadius: 3,
              marginRight: "1rem",
            }}
          >
            <SendIcon
              sx={{ color: "white", fontSize: 30, padding: 0, margin: 0 }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InputBox;
