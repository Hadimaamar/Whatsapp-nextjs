import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center className="grid place-items-center h-screen">
      <div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png"
          height={200}
          width={200}
          className="mb-10 "
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
