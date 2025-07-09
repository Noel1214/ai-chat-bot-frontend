import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface MessageCardProps {
  isAI: boolean;
}

const MessageCard: React.FC<MessageCardProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: props.isAI ? "row-reverse" : "row",
      }}
    >
      <Avatar
        sx={{
          bgcolor: props.isAI ? "#2563EB" : "#334155",
          color: "white",
          display: "inline-flex",
          marginX: 1,
        }}
      >
        AI
      </Avatar>
      <Box
        sx={{
          maxWidth: { sx: "80vw", sm: "40vw" },
          background: "gray",
          bgcolor: props.isAI ? "#2563EB" : "#334155",
          padding: 1,
          borderRadius: 2,
        }}
      >
        <Typography sx={{ display: "inline-flex" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          accusantium illum quam iure excepturi! Reiciendis, fuga? Quia
          aspernatur inventore natus laborum necessitatibus sapiente
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageCard;
