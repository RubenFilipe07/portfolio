import React from 'react';
import { Form } from 'rsuite';


const CampoTexto = ({ name, label, accepter, ...rest }) => (
    <Form.Group controlId={name}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
);

export default CampoTexto;
