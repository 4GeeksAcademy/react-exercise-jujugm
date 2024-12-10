/* <Componente prop={valor}/>
valor= card1, card 2, card3 */
import React from "react";
import  Card from "./card";

function Grid() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
    );
  }

  export default Grid