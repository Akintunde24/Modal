import { useState } from "react";
import { FaCog, FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "./Button";
import { Modal } from "./Modal";


interface openModal {
  handleOpen: () => void;
  open: boolean,
}

export const Sidebar = ({ handleOpen, open }: openModal) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex">
      <div className={`bg-gray-800 transition-width duration-300 text-white ${isOpen ? "w-20" : "w-64"}`}>
        <div className="flex justify-between items-center p-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp size={24} /> : <GiHamburgerMenu size={24}/>}
          </button>
        </div>

        <nav className="mt-4">
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <FaHome size={24} />
              {isOpen ? "" : <span className="ml-4">Home</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <FaUserAlt size={24} />
              {isOpen ? "" : <span className="ml-4">Profile</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <FaCog size={24} />
              {isOpen ? "" : <span className="ml-4">Settings</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <FaSignOutAlt size={24} />
              {isOpen ? "" : <span className="ml-4">Logout</span>}
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-8 bg-gray-100 min-h-screen flex-1">
        <Button handleOpen={handleOpen}/>
        <Modal open={open}/>

      </div>
    </div>
  );
};
