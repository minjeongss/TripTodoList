import "./assets/myreset.css";
import "./assets/App.css";
import Header from "./Header";
import Input from "./Input";
import Totalcount from "./Totalcount";
import { useState } from "react";
import ListContainer from "./ListContainer";
function App() {
  const data = JSON.parse(localStorage.getItem("tripList")) || [];
  let [space, setSpace] = useState(data);
  return (
    <>
      <Header />
      <Input setSpace={setSpace} />
      <Totalcount space={space} />
      <ListContainer space={space} setSpace={setSpace} />
    </>
  );
}

export default App;
