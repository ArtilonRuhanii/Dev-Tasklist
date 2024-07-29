// components/BookingDetails.tsx
import { useRouter } from 'next/router';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import BookingDetailsCard from './BookingDetailsCard';
import FormatDate from './FormatDate';

export default function BookingDetails({booking}){
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/bookings');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card>
            <Card.Header>
              <h1>Booking Details</h1>
            </Card.Header>
            <Card.Body>
              <BookingDetailsCard name={"Service:"} data={booking.service}/>
              <BookingDetailsCard name={"Doctor:"} data={booking.doctor_name}/>
              <BookingDetailsCard name={"Date:"} data={<FormatDate dateString={booking.date} />}/>
              <Card.Text>
                <strong>Time:</strong> {booking.start_time} to {booking.end_time}
              </Card.Text>
              <Button variant="primary" onClick={handleBackClick}>Back to Bookings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


