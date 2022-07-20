import Products from "./pages/products/Products";
import { ProductProvider } from "./context/products.context";
import './style.css'

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Products />
      </div>
    </ProductProvider>
  );
}

export default App;
