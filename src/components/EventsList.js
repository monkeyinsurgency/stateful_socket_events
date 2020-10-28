import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions/EventsList";
import { addToSelections } from "../actions/Selection";

class EventsList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        {!this.props.events ? (
          <div> Loading... </div>
        ) : (
          <ul className="event-list">
            {this.props.events.map((eventItem) => (
              <li key={eventItem.id}>
                <h2>{eventItem.name}</h2>
                <ul>
                  {eventItem.subcat.map((thisSubcat) => (
                    <li key={thisSubcat.id}>
                      <h3>{thisSubcat.name}</h3>
                      <ul>
                        {thisSubcat.event.map((thisEvent) => (
                          <li
                            key={thisEvent.id}
                            className={thisEvent.active ? `active` : `disabled`}
                          >
                            <h4>{thisEvent.name}</h4>
                            <table className="selection">
                              <thead>
                                <tr>
                                  <td>Name</td>
                                  <td>Price</td>
                                </tr>
                              </thead>
                              <tbody>
                                {thisEvent.selection.map((thisSelection) => (
                                  <tr
                                    key={thisSelection.id}
                                    className={
                                      thisSelection.active
                                        ? `active`
                                        : `disabled`
                                    }
                                    onClick={() =>
                                      this.props.addToSelections(thisSelection)
                                    }
                                  >
                                    <td className="name">
                                      {thisSelection.name}{" "}
                                    </td>
                                    <td className="price">
                                      {thisSelection.price}{" "}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchEvents,
      addToSelections,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
