interface openModal {
  handleOpen: () => void;
}

export const Button = ({ handleOpen }: openModal) => {
  return (
    <button
      onClick={handleOpen}
      className="flex justify-center bg-blue-500 rounded-sm p-2 w-[10%] m-3"
    >
      Button
    </button>
  );
};
