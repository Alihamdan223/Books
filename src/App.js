import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
      <SideBar />
      <Main />
      </div>
    </div>
  );
}

export default App;





