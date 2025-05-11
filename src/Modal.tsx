import { JSX } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  open: boolean;
  handleClose: () => void;
  body: JSX.Element;
}

export const Modal = ({ open, handleClose, body }: Props) => {
  return (
    <div
      onClick={handleClose}
      className={`${
        open ? "visible bg-black/20" : "hidden"
      } fixed inset-0 backdrop-blur-md transition-colors`}
    >
      <div className="m-3 flex justify-center my-64">
        <div className="border-2 bg-slate-50 w-[50%]">
          <div className="flex justify-between px-4 py-2 bg-slate-100 drop-shadow-md">
            <h1>Welcome</h1>
            <h1 onClick={handleClose} className="pt-1.5">
              <FaTimes />
            </h1>
          </div>

          <div className="bg-gray-300 py-3 px-3">
            <div className="bg-slate-50 px-4 py-2">
              <h1 className="text-4xl">Invoice</h1>
              <div>
                <p>Date:</p>
                <p className="font-medium">04 Jul, 2024</p>
              </div>
              <div className="flex gap-28">
                <div>
                  <div>
                    <p>Billed From:</p>
                    <p className="font-medium">Hospital test</p>
                  </div>
                  <div>
                    <p>Service Provider:</p>
                    <p className="font-medium">Hospital test</p>
                    <p className="font-medium">Lekki, Lagos Nigeria</p>
                    <p className="font-medium">08132556677</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Billed To:</p>
                    <p className="font-medium">Emmanuel Afolabi</p>
                  </div>
                  <div>
                    <p>Patient Details:</p>
                    <p className="font-medium">Emmanuel Afolabi</p>
                  </div>
                </div>
              </div>
              <table className="w-full my-5">{body}</table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
