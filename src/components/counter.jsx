import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        {this.renderTags()}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    //Used this approach in order to bind event handles to "this"
    console.log("Incremented!", this);
  };
}

export default Counter;
