import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

class UserProfileLite extends React.Component {
  componentWillMount(){
    var Web3 = require('web3');
    var web3 = new Web3('http://localhost:8545');
    console.log(web3);
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col lg="4">
            <UserDetails />
          </Col>
          <Col lg="8">
            <UserAccountDetails />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default UserProfileLite;
