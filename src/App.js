import HomePage from "./Home -page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page from "./Page";


function App() {
  return (
      <div className={'main-page'}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/page/:name' element={<Page/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
