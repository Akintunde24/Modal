

interface openModal {
    handleOpen: () => void;
}

export const Button = ({handleOpen}: openModal) => {

  return (
    <div className="flex justify-center">
      <div className="w-[5%] m-3">
        <div onClick={handleOpen} className="flex justify-center bg-blue-500 rounded-sm p-2">
          Button
        </div>
      </div>
    </div>
  );
};
