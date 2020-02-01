import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div className="ui item">
        <div className="image">
          <i className="large middle aligned icon camera"></i>
        </div>
        <div className="content">
          <h1>{title}</h1>
          <h5>{description}</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, componentProps) => {
  return { stream: state.streams[componentProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
