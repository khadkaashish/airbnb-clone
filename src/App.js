import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Routes,
  isRouteErrorResponse,
  Route,
} from "react-router-dom";
import SearchPage from "./SearchPage";

//https://airbnb-clone-5ba35.web.app

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route
            path="/search"
            element={
              <>
                <SearchPage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
