import React from 'react';
import { createSession } from '../actions/session';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SessionCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: '',
    number_of_voters: '',
    stories: []
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const stories = this.state.stories.split('\n').map((val, key) => {
      return {
        name: val
      };
    });

    this.props.createSession({
      name: this.state.name,
      number_of_voters: this.state.number_of_voters,
      stories: stories
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.onSubmit} method="post">
            <div className="form-group">
              <label>Session Name </label>
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Number of Voters</label>
              <input
                name="number_of_voters"
                type="number"
                value={this.state.number_of_voters}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Stories</label>
              <textarea
                name="stories"
                className="form-control"
                value={this.state.stories}
                onChange={this.handleChange}
                rows={3}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = {
  createSession: createSession
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionCreate)
);
