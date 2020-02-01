import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import history from "../../history";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          /*
           * initialValues is a special redux-form property.
           * Also, we don't want to sent the entire stream object's initialValues
           * because reduc-form will then expect that all fields,
           * including id and userId are supposed to be editable and therefore
           * it will send those values to the back-end server which
           * may not accept due to the fact that for editing
           * an object (PUT operation) is not supposed to be able to edit those fields.
           */
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }

  onSubmit = formValues => {
    // event.preventDefault(); No need to be called due to redux-form handleSubmit
    this.props.editStream(this.props.match.params.id, formValues);

    //Programatic navigation with successful create
    history.push("/");
  };
}

const mapStateToProps = (state, componentProps) => {
  return { stream: state.streams[componentProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
