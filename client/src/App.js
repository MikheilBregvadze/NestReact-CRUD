
import { ProductProvider } from "./context/products.context";
import './style.css'
import Router from "./pages/desktop/layout/routes/Router";
import Header from "./pages/desktop/layout/header/Header";


function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <section>
          <Router />
        </section>
      </div>
    </ProductProvider>
  );
}

export default App;
