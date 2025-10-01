import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);

  function HandleClick() {
    setEnterPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? " unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
