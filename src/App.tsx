import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Main page</h1>
        <h2>Navigation...</h2>
        <nav>
          <button onClick={()=> navigate('Profile/:main')}>
            PorfilePage
          </button>
        </nav>
      </div>
    </>
  );
}

export default App;
