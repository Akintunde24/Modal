import { useState } from "react";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";


export const Container = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal((modal) => !modal)
  }

  const handleClose = () => {
    setShowModal(!showModal)
    console.log("clicked")
  }

  return (
    <div>
      <div>
        <Nav />
        <Sidebar handleOpen={handleOpen} handleClose={handleClose} open={showModal} />
      </div>
    </div>
  );
};
