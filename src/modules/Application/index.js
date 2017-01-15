import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="panel panel-primary">
            <div className="panel panel-heading">
              <h5 className="panel-title"><i className="fa fa-user"></i> Users</h5>
            </div>
            <div className="panel-body>">
              <table className="table table-striped table-hover ">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Column heading</th>
                  <th>Column heading</th>
                  <th>Column heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="info">
                  <td>3</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="success">
                  <td>4</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="danger">
                  <td>5</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="warning">
                  <td>6</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="active">
                  <td>7</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
