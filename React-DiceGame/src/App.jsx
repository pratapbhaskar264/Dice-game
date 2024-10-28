import styled from "styled-components";
import StartGame from "./Components/StartGame";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isgamestarting, setisgamestarting] = useState(false);

  const toggleGamePlay = () => {
    setisgamestarting((prev) => !prev);
    console.log(isgamestarting);
  };

  return (
    <>{isgamestarting  ? <GamePlay toggle={toggleGamePlay}  /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
