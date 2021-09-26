import { Avatar } from "@mui/material";

const Chat = ({ id, users }) => {
  return (
    <div className="flex items-center cursor-pointer p-4 break-words hover:bg-[#e9eaeb]">
      <Avatar className="m-1 mr-4 " />
      <p>Email</p>
    </div>
  );
};

export default Chat;
