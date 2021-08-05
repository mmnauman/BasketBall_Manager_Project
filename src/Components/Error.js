import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';
import React from 'react';



export default function ErrorComp({children, closeHandler}) {

      return (
        <Alert variant="danger" onClose={() => closeHandler()} dismissible>
          <Alert.Heading>{children}</Alert.Heading>
        </Alert>
      );
  }