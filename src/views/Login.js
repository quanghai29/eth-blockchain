import React from "react";
import  { Redirect, Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    var Web3 = require('web3');
    var web3 = new Web3('http://localhost:8545');
    console.log(web3);
  }

  handleClick() {
    this.setState({ redirect: "/blog-overview" });
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container-fluid">
       <div className="row mt-5">
            <div className="col-4"></div>
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                      <div className="text-center"> 
                        <h3 className="card-title">Access wallet</h3>
                        <p>Do not have a wallet?&nbsp;
                          <Link to="/signup">Create New Wallet</Link>
                        </p>
                      </div>
                      <div>
                        <div className="form-group">
                         <label htmlFor="formGroupprivateKey">Your Private Key</label>
                          <input type="text" className="form-control" id="privateKey" placeholder="Private Key"/>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={this.handleClick} >Access Wallet</button>
                      </div>
                    </div>
                </div>
            </div>
       </div>
      
      </div>
    );
  }
};

export default Login;