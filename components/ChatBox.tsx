import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ChatBox = () => {
  return (
    <div>
      <Box
        className="scrollbar-hide"
        sx={{
          maxHeight: "27rem",
          overflowY: "auto",
          textAlign: "center",
          padding: 2,
          background: "green",
        }}
      ></Box>
    </div>
  );
};

export default ChatBox;
