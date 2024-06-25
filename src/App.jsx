import Sidebar from './Sidebar';
import Header from './Header ';
import Dashboard from './Dashboard ';
import './App.css'
function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
