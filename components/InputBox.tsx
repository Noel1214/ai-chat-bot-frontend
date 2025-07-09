import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const InputBox = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "100vw",
          paddingX: "1rem",
          background: "#1E293B",
          height: { xs: "11rem", sm: "6rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: { sm: "center" },
          paddingY: { xs: 3, sm: 1 },
        }}
      >
        <Box
          component="form"
          sx={{
            width: "96%",
            height: { xs: "40%", sm: "70%" },
            background: "#334155",
            display: "flex",
            alignItems: "center",
            borderRadius: 4,
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="ask anything!"
            sx={{
              input: {
                cursor: "pointer",
              },
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
