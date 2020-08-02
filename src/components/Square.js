import React from 'react';
import { Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function Square(props){
    return(
      <Button className="square" onClick={props.onClick}>
        {props.value}
      </Button>
    )
  }

  export default Square; 
