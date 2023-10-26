import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const config = {
  readonly: false,
  placeholder: "",
  buttons: ["bold", "italic", "underline", "link"],
};

const MainMsgInput = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(""); // Define and manage the content state

  return (
    <>
      <div className="md:w-[100%] w-full p-1">
        <div className="text-sm md:text-[1.2rem] font-bold">Message</div>
        <div className="w-full border-[1.6px] rounded-sm relative">
          {/* Text editor */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <div className="md:w-[100%] w-full p-1">
        <div className="text-sm md:text-[1.2rem] font-bold">Others</div>
        <div className="w-full border-[1.6px] rounded-sm relative">
          {/* Text editor */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>
    </>
  );
};

export default MainMsgInput;
