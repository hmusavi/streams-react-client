import React, { Fragment } from "react";
import { connect } from "react-redux";
import Modal from "../../Modal";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }

  renderContent = () => {
    if (!this.props.stream) {
      return "Loading...";
    }

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  };

  renderActions = () => {
    return (
      <Fragment>
        <button onClick={this.onDeleteClick} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  };

  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id);
    history.push("/");
  };
}

const mapStateToProps = (state, componentProps) => {
  return { stream: state.streams[componentProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
