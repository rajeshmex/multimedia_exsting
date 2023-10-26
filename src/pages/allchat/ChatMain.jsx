import React from "react";
import ChatuserDetails from "./ChatuserDetails";
import ChatHeader from "./ChatHeader";
import Allchats from "./Allchats";
import ChatInputSection from "./ChatInputSection";

const ChatMain = () => {
  return (
    <>
      <div className="w-[80%] rounded-sm shadow-sm bg-[white] h-[100vh] relative left-[10%] flex flex-col justify-between align-middle items-center">
        <ChatHeader />
        <Allchats />
        <ChatInputSection />
      </div>
    </>
  );
};

export default ChatMain;
