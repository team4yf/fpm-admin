import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5 className="panel-title">CPU</h5>
            </div>
            <div className="panel-body">
              <h2 className="text-center" style={ {height:"200px"} } >Here is Chart</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5 className="panel-title">CPU</h5>
            </div>
            <div className="panel-body">
              <h2 className="text-center" style={ {height:"200px"} } >Here is Chart</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
