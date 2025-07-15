"use client";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { responseSetter } from "@/lib/features/conversations/conversationSlice";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  prompt: string;
};

const InputBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();
  const response = useSelector((state: RootState) => state.conversation.response);
  const [outPut, setoutPut] = useState("");

  const getData = () => {
    console.log("clicked");
    const eventSource = new EventSource("http://localhost:3001/ai");

    eventSource.onmessage = (event) => {
      if (event.data === "[DONE]") {
        eventSource.close();
        return;
      }

      try {
        const parsed = JSON.parse(event.data);
        setoutPut((prev) => prev + parsed.text + " ");
      } catch (err) {
        console.error("Error parsing:", err);
      }
    };

    eventSource.onerror = (err) => {
      console.error("Streaming error:", err);
      eventSource.close();
    };
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(watch("prompt"));

  useEffect(() => {
    dispatch(responseSetter(outPut));
  }, [outPut]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("prompt")}
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
              type="submit"
              variant="contained"
              sx={{
                height: "2.3rem",
                minWidth: "unset",
                width: "2.7rem",
                borderRadius: 3,
                marginRight: "1rem",
              }}
            // onClick={() => {
            //   getData;
            // }}
            >
              <SendIcon
                sx={{ color: "white", fontSize: 30, padding: 0, margin: 0 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default InputBox;
