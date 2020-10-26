
import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Blogs from "./blogs/Blogs";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Podcast from "./podcast/Podcast";
import WorkExperience from "./workExperience/WorkExperience";


import Top from "./topbutton/Top";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Achievement />
		    <Blogs />
        <WorkExperience />
        <Podcast />
        <Top />
      </div>
    );
  }
}
