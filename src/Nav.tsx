

export const Nav = () => {
  return (
    <div className="flex justify-between bg-amber-100 p-3">
      <div>
        <p>Invoice Statement</p>
      </div>

      <div className="flex">
        <p className="px-3">Messages</p>
        <p className="px-3">Notification</p>
        <p className="px-3">Account</p>
      </div>
    </div>
  );
};
