import React, { Component } from "react";
import { connect } from "react-redux";

class Selection extends Component {
  render() {
    return (
      <div>
        {this.props.selections.length === 0 ? (
          <div className="selections-header">Nothing selected</div>
        ) : (
          <div className="selections-header">
            You have selected the following events:
          </div>
        )}

        <div>
          <div className="selections">
            <ul className="selected-items">
              {this.props.selections.map((item) => (
                <li key={item.id}>
                  <div>
                    <div>{item.name}</div>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: {this.props.selectionsCount}</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selections: state.selections.selections,
  selectionsCount: state.selections.selectionsCount,
});

export default connect(mapStateToProps, {})(Selection);
