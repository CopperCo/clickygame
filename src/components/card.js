import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const GameCard = props => {
  // cardImg = this.props.imgSrc;

  return (
    <div>
      <Card className="gameCard">
        <CardImg
          top
          width="100%"
          src="https://static3.srcdn.com/wordpress/wp-content/uploads/peter-griffin-family-guy.jpg?q=50&fit=crop&w=798&h=407"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Peter Griffin</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
