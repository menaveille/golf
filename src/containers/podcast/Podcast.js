import React from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Podcast() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="contact">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p className="subTitle podcast-header-subtitle">{podcastSection.subtitle}</p>
		<p className="subTitle podcast-header-subtitle">{podcastSection.number}</p>
		<p className="subTitle podcast-header-subtitle">{podcastSection.email}</p>
      </div>
      
	  
    </div>
    </Fade>
  );
}
