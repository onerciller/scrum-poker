import React from 'react';
import Point from '../components/point';
import { connect } from 'react-redux';
import { getSession } from '../actions/session';

class MasterPanel extends React.Component {
  storyList = stories => {
    if (stories) {
      return stories.map(story => {
        return (
          <React.Fragment key={story.id}>
            <tr>
              <td>{story.name}</td>
              <td>{story.story_point}</td>
              <td>{story.status}</td>
            </tr>
          </React.Fragment>
        );
      });
    }
  };

  componentDidMount() {
    const { params: { id } } = this.props.match;
    this.props.getSession(id);
  }

  render() {
    const { session } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">
          Story List
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Story</th>
                <th>Story Point</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.storyList(session.data.stories)}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <Point number="1" />
            <Point number="2" />
            <Point number="3" />
            <Point number="5" />
            <Point number="8" />
            <Point number="13" />
            <Point number="21" />
            <Point number="55" />
            <Point number="89" />
            <Point number="134" />
          </div>

          <div className="form-group">
            <label>Session name</label>
            <input type="text" className="form-control small-input" />
          </div>
          <button className="btn btn-success">Send Vote</button>

        </div>

        <div className="col-md-4">
          Scrum Master Panel
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Voter 1</td>
                <td>Voted</td>
              </tr>
              <tr>
                <td>Voter 1</td>
                <td>Voted</td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>13</td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="btn btn-success float-right">
            End Voiting For Story 1
          </button>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = {
  getSession: getSession
};

const mapStateToProps = (state, props) => {
  return {
    session: state.session
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterPanel);
