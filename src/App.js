import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pagges/Home";
import SingleDog from "./pagges/SingleDog";


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:names" element={<SingleDog/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
