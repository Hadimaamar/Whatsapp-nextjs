import { Avatar, IconButton, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatRef);
  const createChat = () => {
    console.log("craete chat");
    const input = prompt(
      "Please enter an email address for the user you want to chat with "
    );
    if (!input) return null;
    if (
      EmailValidator.validate(input) &&
      input !== user.email &&
      !hatAlreadyExist(input)
    ) {
      //add the chat tl chat list in db if doesnt exist and valid
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };
  const chatAlreadyExist = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.lenght > 0
    );
  return (
    <div className="bg-white">
      <div className="flex sticky top-0 bg-white z-50 justify-between items-center h-20 p-4 shadow-md">
        <div
          onClick={() => auth.signOut}
          className=" cursor-pointer hover:opacity-80"
        >
          <Avatar />
        </div>
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center p-5 rounded-sm bg-white">
        <SearchIcon />
        <input
          type="text"
          placeholder="search in chats"
          className="outline-none border-none flex-1 "
        />
      </div>
      <Button onClick={createChat} className="w-full !rounded-md ">
        Start a new Chat
      </Button>

      {/* chat list */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </div>
  );
};

export default Sidebar;
