import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Bank</header>
      <button>
        <Link to={"/Loggin"}>Login</Link>
      </button>
      <br />
      <button>
        <Link to={"/newAcc"}>Sign up</Link>
      </button>
    </div>
  );
}

export default App;
