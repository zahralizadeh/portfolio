import React, { Component } from "react";
import Menu from "../Menu";
import { withRouter } from "react-router-dom";
import MenuItem from "./MenuItem";

class ToggleMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  toggleMenu = () => {
    if (this.state.visible) document.body.classList.remove("mobile-nav-active");
    else document.body.classList.add("mobile-nav-active");
    this.setState({ visible: !this.state.visible });
  };

  routeActive(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    console.log(paths);
    console.log(this.props.location.pathname);
    return paths.some((p) => this.props.location.hash.indexOf(p) > -1);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.toggleMenu}
          className="mobile-nav-toggle d-lg-none"
        >
          <i className="icofont-navigation-menu"></i>
        </button>

        {this.state.visible && (
          <React.Fragment>
            <nav className="mobile-nav d-lg-none">
              <ul>
                {Menu.map((item, i) => (
                  <MenuItem
                    item={item}
                    isActive={this.routeActive(item.path)}
                    key={i}
                    onClick={this.toggleMenu}
                  />
                ))}
              </ul>
            </nav>
            <div className="mobile-nav-overly d-block "></div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default withRouter(ToggleMenu);
