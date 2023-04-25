import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/SIdeBar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlasss">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  );
}

export default App;
