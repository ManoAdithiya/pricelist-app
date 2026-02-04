import { useState } from "react";
import Login from "./components/pages/Login";
import "./components/pages/i18n";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-wrapper">
      <Login />
    </div>
  );
}

export default App;
