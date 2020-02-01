import React from "react";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import history from "../../history";

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />;
      </div>
    );
  }

  onSubmit = formValues => {
    // event.preventDefault(); No need to be called due to redux-form handleSubmit
    this.props.createStream(formValues);

    //Programatic navigation with successful create
    history.push("/");
  };
}

export default connect(null, { createStream })(StreamCreate);
