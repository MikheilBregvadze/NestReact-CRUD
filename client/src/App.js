import { GetAllProducts } from "./services/service";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    GetAllProducts()
      .then(res => console.log(res.data[0]))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
