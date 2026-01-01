import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {PagesRouter} from './routes/PagesRouter'

function App() {
  return (
    <BrowserRouter>
        <PagesRouter />
    </BrowserRouter>
  );
}

export default App;
