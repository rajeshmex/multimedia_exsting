import React,{useState} from "react";
import ChatuserDetails from "./ChatuserDetails";

const ChatHeader = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();

  const [click, setClick] = useState(false);
  const [name, setName] = useState("");

  const handleOpen = (data) => {
    setOpen(!open);
    setImages(data);
  };
  return (
    <>
      <div
        className="w-full  z-[4]  md:p-2 border-b-[1px] shadow-md flex  flex-col  justify-between relative"
        onClick={() => setClick(false)}
      >
        {/* user Avatar with Name  */}
        <ChatuserDetails handleOpen={handleOpen} />
      </div>
    </>
  );
};

export default ChatHeader;
