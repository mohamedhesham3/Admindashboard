
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">Menu</div>
      <ul>
        <li className="p-4 hover:bg-gray-700">Tasks</li>
        <li className="p-4 hover:bg-gray-700">Messages</li>
        <li className="p-4 hover:bg-gray-700">Analytics</li>
        <li className="p-4 hover:bg-gray-700">Payments</li>
      </ul>
    </div>
  );
}

export default Sidebar;
