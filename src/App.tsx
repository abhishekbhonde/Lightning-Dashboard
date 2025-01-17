import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import OverviewCard from './components/OverviewCard';
import Dashboard from './components/Dashboard';
import Payments from './components/Payments';

const App = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      {/* Main Dashboard Area */}
      <div className="col-span-10 flex flex-col bg-[#F7F9FB]">
        {/* Navbar */}
        <Navbar />

        <div className="p-6 space-y-6">
          {/* Overview Section */}
          <div>
            <OverviewCard />
          </div>

          {/* Graph Section */}
          <div >
            <div><Dashboard/></div>
          </div>
          <div>
            <Payments/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
