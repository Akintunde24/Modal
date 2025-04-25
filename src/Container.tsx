import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";


export const Container = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal((modal) => !modal)
  }

  return (
    <div>
      <div>
        <Button handleOpen={handleOpen}/>
        <Modal open={showModal}/>
      </div>
    </div>
  );
};
