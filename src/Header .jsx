
const Header = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl">Analytics</div>
      <div className="flex items-center">
        <div className="mr-4">Active</div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/originals/39/71/8a/39718a52e268741b667cfa2070b70cbf.png" 
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>Hi, User</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
