import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class layout extends React.Component {
  render(props) {
    return (
      <Container>
        <Row>
          <Col>{this.props}</Col>
        </Row>
      </Container>
    );
  }
}
