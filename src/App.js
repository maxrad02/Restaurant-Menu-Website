import './App.css';
import SidebarRestrictions from "./SidebarRestrictions";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          MenuMe
        </p>
      </header>
      <SidebarRestrictions expanded={"true"}/>
    </div>
  );
}
 
export default App;
