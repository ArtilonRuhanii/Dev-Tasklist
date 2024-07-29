'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import CreateForm from '@/components/CreateForm';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NewBooking(){
  const router = useRouter();
  const [formData, setFormData] = useState({
    service: '',
    doctor_name: '',
    date: '',
    start_time: '',
    end_time: '',
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); 

    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessages = errorData.errors || ['Failed to create booking'];
        setErrors(errorMessages);
        return;
      }

      router.push('/bookings');
    } catch (error) {
      setErrors([error.message]);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Create a New Booking</Card.Title>
              {errors.length > 0 && (
                <Alert variant="danger">
                  <Alert.Heading>Errors:</Alert.Heading>
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <CreateForm
                  label="Service"
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                />
                <CreateForm
                  label="Doctor Name"
                  type="text"
                  name="doctor_name"
                  value={formData.doctor_name}
                  onChange={handleChange}
                />
                <CreateForm
                  label="Date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <CreateForm
                  label="Start Time"
                  type="time"
                  name="start_time"
                  value={formData.start_time}
                  onChange={handleChange}
                />
                <CreateForm
                  label="End Time"
                  type="time"
                  name="end_time"
                  value={formData.end_time}
                  onChange={handleChange}
                />
                <Button variant="primary" type="submit" className="mt-3">
                  Create Booking
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
