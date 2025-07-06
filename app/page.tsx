"use client";
import React from "react";
import Header from "@/components/Header";
import styled from "@emotion/styled";
import InputBox from "@/components/InputBox";

const page = () => {
  const FullScreen = styled.div({
    width: "100vw",
    height: "100vh",
    background: "blue",
  });

  return (
    <div>
      <div>
        <Header />
        {/* <div className="h-24 w-auto bg-blue-500"> */}
          <InputBox />
        {/* </div> */}
      </div>
    </div>
  );
};

export default page;
