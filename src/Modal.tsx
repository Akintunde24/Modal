
interface Props {
    open: boolean,
}

export const Modal = ({open}: Props) => {

  return (
    <div className= {`${open ? "visible" : "hidden"} flex justify-center`}>
      <div className="w-[50%] m-3">

        <div className="border-2 p-10 bg-sky-400 text-white">
          <h1 className="flex justify-center">Welcome</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            provident, quidem sequi officia impedit perferendis consequatur
            numquam expedita laborum reprehenderit? Quibusdam obcaecati
            molestiae accusamus beatae? Iste molestias adipisci est ducimus.
          </p>
        </div>
      </div>
    </div>
  );
};
