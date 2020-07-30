import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "../Menu";
import MenuItem from "./MenuItem";

class Header extends Component {
  state = {
    toggle_header:
      "fixed-top  d-flex justify-content-center align-items-center",
  };
  routeActive(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    return paths.some((p) => this.props.location.hash.indexOf(p) > -1);
  }

  toggleHeader = () => {
    // Toggle .header-scrolled class to #header when page is scrolled
    var scrolled = document.scrollingElement.scrollTop;

    console.log(scrolled);

    if (scrolled > 100)
      this.setState({
        toggle_header:
          "fixed-top  d-flex justify-content-center align-items-center header-scrolled",
      });
    // document.body.header.classList.add("header-scrolled");
    else
      this.setState({
        toggle_header:
          "fixed-top  d-flex justify-content-center align-items-center",
      });
    // document.header.classList.remove("header-scrolled");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleHeader);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleHeader);
  }

  handleHeaderClass = () => {
    var style =
      "fixed-top  d-flex justify-content-center align-items-center" +
      this.state.toggle_header;
    console.log(style);
    return style;
  };
  render() {
    return (
      <header
        id="header"
        className={this.state.toggle_header}
        onScroll={this.toggleHeader}
      >
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            {Menu.map((item, i) => {
              return (
                <MenuItem
                  isActive={this.routeActive(item.path)}
                  item={item}
                  key={i}
                  onClick={() => {}}
                />
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
export default withRouter(Header);
