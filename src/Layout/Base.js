import React from "react";
import ToggleMenu from "./ToggleMenu";
import Header from "./Header";
import Hero from "../Components/Hero";

import Footer from "./Footer";

const Base = (props) => (
  <React.Fragment>
    <ToggleMenu />
    <Header />
    <Hero />
    <main id="main">{props.children}</main>
    <Footer />
  </React.Fragment>
);
export default Base;
