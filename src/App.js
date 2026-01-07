import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PagesRouter } from "./routes/PagesRouter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PagesRouter />
    </BrowserRouter>
  );
}

export default App;
