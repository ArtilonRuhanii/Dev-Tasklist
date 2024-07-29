import React from 'react';
import { Form } from 'react-bootstrap';

export default function CreateForm ({label,type,name,value,onChange }){
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} value={value} onChange={onChange} />
    </Form.Group>
  );
};
