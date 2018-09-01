import React from 'react';
import Point from '../components/point';
import { connect } from 'react-redux';

class DeveloperPanel extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
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
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
				<div className="col-md-6">

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
					<input type="text" className="form-control small-input"/>
				</div>

				<button className="btn btn-success">Send Vote</button>

        </div>
      </div>
    );
  }
}

export default DeveloperPanel;
