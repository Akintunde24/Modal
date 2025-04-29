import { JSX } from "react";

interface Props {
  open: boolean;
  body: JSX.Element;
}

export const Modal = ({ open, body }: Props) => {
  return (
    <div className={`${open ? "visible" : "hidden"} flex justify-center`}>
      <div className="w-[50%] m-3">
        <div className="border-2 p-10 bg-sky-400 text-white">
          <h1 className="flex justify-center">Welcome</h1>
          {body}
        </div>
      </div>
    </div>
  );
};
