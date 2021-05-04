import React from "react";
import  { Redirect, Link} from 'react-router-dom';
import Web3 from 'web3';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };

    this.createAccount = this.createAccount.bind(this);
  }

  async componentWillMount() {
    await this.loadWeb3()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  createAccount(){
    const web3 = window.web3;
    var json = web3.eth.accounts.create();
    console.log(json);
    //this.setState({ redirect: "/blog-overview" });
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
                        <h3 className="card-title">Create New wallet</h3>
                        <p>Do have a wallet?&nbsp;
                          <Link to="/about">Acess Wallet</Link>
                        </p>
                      </div>
                      <div>
                        <div className="form-group">
                         <label htmlFor="formGroupPassword">Your PassWord</label>
                          <input type="text" className="form-control" id="password" placeholder="password"/>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={this.createAccount} >Next <i className ="fas fa-angle-right"></i></button>
                      </div>
                    </div>
                </div>
            </div>
       </div>
      
      </div>
    );
  }
};

export default SignUp;