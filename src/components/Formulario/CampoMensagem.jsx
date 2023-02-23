import React from 'react';
import { Form, Input } from 'rsuite';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


  const CampoMensagem = ({ name, label, accepter, ...rest }) => (
    <Form.Group controlId={name}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control rows={5} name={name} accepter={Textarea} style={{maxHeight: '150px'}}  {...rest}/>
    </Form.Group>
    );


export default CampoMensagem;
