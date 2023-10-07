import Header from "./components/common/Header";
import DashBoard from "./components/dashBoard/DashBoard";
import "./index.css";
import ChartComponent from "./containers/Chart";
function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <DashBoard />
        <div className="chart">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
