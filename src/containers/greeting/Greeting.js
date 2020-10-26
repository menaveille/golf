import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p o1"  >{greeting.o1}</p>
			<p className="greeting-text-p o2"  >{greeting.o2}</p>
			<p className="greeting-text-p o3"  >{greeting.o3}</p>
			<p className="greeting-text-p o4"  >{greeting.o4}</p>
			
			
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contactez-nous" href="mailto:contactvarka@gmail.com"/>
              
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="Entrepreneur qui cherchent des informations" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
