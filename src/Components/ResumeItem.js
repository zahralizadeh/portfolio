import React, { Component } from "react";

class ResumeItem extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="resume-title">{this.props.title}</h3>{" "}
        {this.props.items.map((item, i) => {
          return (
            <div className="resume-item" key={i}>
              <h4>{item.title}</h4>
              <React.Fragment>
                {item.timeframe && <h5>{item.timeframe}</h5>}
              </React.Fragment>
              {item.description.map((node, k) => {
                return node.type === "txt" ? (
                  <p key={k}>
                    <em>{node.content}</em>
                  </p>
                ) : (
                  node.type === "lst" && (
                    <ul key={k}>
                      {node.content.map((d_item, j) => {
                        return <li key={j}>{d_item}</li>;
                      })}
                    </ul>
                  )
                );
              })}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default ResumeItem;
