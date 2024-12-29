import React, { useRef, useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { useChatStore } from "../Store/useChatStore";
import toast, { ToastBar } from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

const ChatInputContainer = () => {
  const { sendMessage } = useChatStore();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState();
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="flex justify-between relative overflow-visible">
      <input
        type="text"
        className="bg-base-200 outline-none border border grow rounded-[8px] pl-2"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      />
      {imagePreview && (
        <span className="absolute top-[-100px] flex flex-col ">
          <IoIosClose className=" self-end" />
          <img src={imagePreview} width="60px" height="60px" />
        </span>
      )}

      <span className="pl-2 flex w-[20%] justify-around ">
        <button>
          <label htmlFor="image-select">
            <TfiGallery />
          </label>
          <input
            type="file"
            id="image-select"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={(e) => handleImageChange(e)}
          />
        </button>
        <button type="button" onClick={(e) => handleSendMessage(e)}>
          <IoIosSend />
        </button>
      </span>
    </div>
  );
};

export default ChatInputContainer;
