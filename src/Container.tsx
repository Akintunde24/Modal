import { useState } from "react";
import { Modal } from "./Modal";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";


export const Container = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal((modal) => !modal)
  }

  return (
    <div>
      <div>
        <Nav />
        <Sidebar handleOpen={handleOpen} open={showModal}/>
        <Modal open={showModal}/>
      </div>
    </div>
  );
};
