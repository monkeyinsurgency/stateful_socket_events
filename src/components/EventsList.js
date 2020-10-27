import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions/EventsList";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: null,
    };
  }
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    const { selectedEvents } = this.state;
    return (
      <div>
        {!this.props.events ? (
          <div> Loading... </div>
        ) : (
          <ul className="event-list">
            {this.props.events.map((eventItem) => (
              <li key={eventItem.id}>
                {eventItem.id + ' ' + eventItem.name}
                <ul>
                  {eventItem.subcat.map((thisSubcat) => (
                    <li key={thisSubcat.id}>
                      {thisSubcat.id + ' ' + thisSubcat.name + ' ' + String(thisSubcat.active)}
                      <ul>
                        {thisSubcat.event.map((thisEvent) => (
                          <li key={thisEvent.id}>
                            {thisEvent.id + ' ' + thisEvent.name + ' ' + String(thisEvent.active)}
                            <table className="selection">
                              <tbody>
                                {thisEvent.selection.map((thisSelection) => (
                                  <tr key={thisSelection.id}>
                                    <td>
                                      <input type="checkbox"></input>
                                    </td>
                                    <td>ID: {thisSelection.id}</td>
                                    <td>Name: {thisSelection.name} </td>
                                    <td>Price: {thisSelection.price} </td>
                                    <td>Active: {String(thisSelection.active)}</td>
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
      fetchEvents: fetchEvents,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
