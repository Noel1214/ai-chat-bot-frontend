import React from "react";

const DefaultSectionChatBox = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#427BF5] to-[#8A3AEB]">
        <h1 className="text-2xl font-bold">AI</h1>
      </div>
      <h1 className="text-3xl">Welcome to AI Assistant</h1>
      <p className="w-[35rem] text-center text-[#94A3B8]">
        Start a conversation by typing a message below. I'm here to help you
        with questions, creative tasks, and more!
      </p>
    </div>
  );
};

export default DefaultSectionChatBox;
