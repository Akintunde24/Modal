interface openModal {
  handleOpen: () => void;
  text: string,
}

export const Button = ({ handleOpen, text }: openModal) => {
  return (
    <button
      onClick={handleOpen}
      className="flex justify-center text-blue-600 rounded-sm p-2 w-[15%] cursor-pointer"
    >
      {text}
    </button>
  );
};
