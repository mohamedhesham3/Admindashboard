import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const pageImpressionsData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Page Impressions',
      data: [10, 20, 30, 40, 30, 20, 10],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Adsense Clicks',
      data: [5, 15, 25, 35, 25, 15, 5],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
  ],
};

const viewsData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Views',
      data: [70, 60, 80, 90, 70, 60, 50],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const likesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Likes',
      data: [60, 70, 80, 90, 70, 60, 50],
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded shadow">
          <div>Total Revenue</div>
          <div className="text-2xl">$3249</div>
        </div>
        <div className="bg-pink-100 p-4 rounded shadow">
          <div>Total Users</div>
          <div className="text-2xl">249</div>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <div>New Users</div>
          <div className="text-2xl">2</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <div>Server Uptime</div>
          <div className="text-2xl">152 days</div>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <div>To Do List</div>
          <div className="text-2xl">7 tasks</div>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <div>Issues</div>
          <div className="text-2xl">3</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <Line data={pageImpressionsData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <Line data={viewsData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <Line data={likesData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
