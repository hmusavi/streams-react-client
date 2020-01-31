import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }

  renderInput = formProps => {
    const { input, label, meta } = formProps;
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      /* <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      /> */
      /* Using a shorthand syntax instead*/
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // event.preventDefault(); No need to be called due to redux-form handleSubmit
    this.props.createStream(formValues);
  };

  renderError = meta => {
    const { error, touched } = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Must enter a title";
  }
  if (!formValues.description) {
    errors.description = "Must enter a description";
  }
  return errors;
};

// export default connect(reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate));
//Using shorter syntax
const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
export default connect(null, { createStream })(formWrapped);
