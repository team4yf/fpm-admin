import React from 'react'

export default React.createClass({
  render: () => {
    return (
      <div className="row" id="targets">

        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="pull-left">
                <i className="fa fa fa-user-circle-o text-primary"></i>
              </div>
              <div className="pull-right">
                <h1 className="text-right text-info"><strong>2000</strong></h1>
                <p className="text-right">New Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="pull-left">
                <i className="fa fa-database text-primary"></i>
              </div>
              <div className="pull-right">
                <h1 className="text-right text-info"><strong>900</strong></h1>
                <p className="text-right">Data Created</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="pull-left">
                <i className="fa fa-plug text-primary"></i>
              </div>
              <div className="pull-right">
                <h1 className="text-right text-info"><strong>2</strong></h1>
                <p className="text-right">Approved Application</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="pull-left">
                <i className="fa fa-warning text-primary"></i>
              </div>
              <div className="pull-right">
                <h1 className="text-right text-warning"><strong>1</strong></h1>
                <p className="text-right">Errors</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
})
