"use client";
import React from "react";
import Header from "@/components/Header";
import InputBox from "@/components/InputBox";
import Box from "@mui/material/Box";
import ChatBox from "@/components/ChatBox";
import MessageCard from "@/components/MessageCard";

const page = () => {
  return (
    <div>
      <div className="max-h-screen min-h-screen w-screen  flex flex-col justify-between">
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // background: "blue",
            bgcolor: "#0F172A",
            paddingTop: 4,
            paddingX: 1,
          }}
        >
          <ChatBox />
        </Box>
        <InputBox />
      </div>
    </div>
  );
};

export default page;
