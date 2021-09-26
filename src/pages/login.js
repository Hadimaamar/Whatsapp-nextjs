import { Button } from "@mui/material";
import Image from "next/image";
import { auth, provider } from "../../firebase";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div className="grid place-items-center h-screen bg-[whitesmoke] ">
      <div>
        <div>
          <title>Login</title>
        </div>
        <div className=" flex flex-col items-center p-24 bg-white rounded-sm shadow-2xl  ">
          <img
            className="  h-52 w-52 mb-14"
            src="https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png"
          />
          <Button onClick={signIn}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
