import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const AppMainButton = props => {
  return (
    <Link to={props.to}>
      <Button
        color="primary"
        outline
        {...props}
        style={{ margin: 4, padding: 4 }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default AppMainButton;
