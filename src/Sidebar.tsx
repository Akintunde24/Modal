import { useState } from "react";
import { FaCog, FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { FaEllipsisVertical } from "react-icons/fa6";

interface openModal {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

export const Sidebar = ({ handleOpen, open, handleClose }: openModal) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex">
        <div
          className={`bg-gray-800 transition-width duration-300 text-white ${
            isOpen ? "w-20" : "w-64"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoCloseSharp size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
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
        <div className=" bg-gray-100 min-h-screen flex-1">
          <div className="flex justify-end mr-16">
            <Button handleOpen={handleOpen} text="+Click for new invoice" />
          </div>

          <div className="pr-5" onClick={handleOpen}>
            <table className="border w-full">
              <thead className="bg-gray-400 text-left">
                <tr>
                  <th>Invoice ID</th>
                  <th>Details</th>
                  <th>Date</th>
                  <th>Fee</th>
                  <th>Paid</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-left">
                <tr className="cursor-pointer text-gray-700 border-y">
                  <th className="text-blue-500">INV3513</th>
                  <td>fever</td>
                  <td>10-08-2024</td>
                  <td>6300</td>
                  <td>0</td>
                  <td>
                    <p className="bg-green-100 text-green-600 w-[40%] text-center rounded-md">
                      paid
                    </p>
                  </td>
                  <td>
                    <FaEllipsisVertical />
                  </td>
                </tr>

                <tr className="cursor-pointer text-gray-700">
                  <th className="text-blue-500">INV3513</th>
                  <td>Rema</td>
                  <td>10-08-2024</td>
                  <td>6300</td>
                  <td>0</td>
                  <td>
                    <p className="bg-red-100 text-red-600 w-[40%] text-center rounded-md">
                      unpaid
                    </p>
                  </td>
                  <td>
                    <FaEllipsisVertical />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal open={open} handleClose={handleClose} body={<p>Type here</p>} />
    </div>
  );
};
