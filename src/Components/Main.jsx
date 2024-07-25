import React from "react";
import "../Style/main.css"
const Main = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="column">
          <h1>UN MOD MENU <br/>C'EST AUSSI <br/>SIMPLE.</h1>
          <div className="buttons">
            <a href="/app/EldenRingModdedLiberty.rar" className="black">GET STARTED</a>
            <a href="https://discord.gg/zKCtYsa3Q6" target="_blank" className="cream">JOIN THE COMMUNITY</a>
          </div>
          <p>Actual Version : </p>
        </div>
        <img src="img/Cross.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
