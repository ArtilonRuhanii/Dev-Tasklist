import { useRouter } from 'next/router';
import { ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import FormatDate from './FormatDate';

export default function BookingListGroup({ data }) {
  const router = useRouter();

  const viewBookingDetails = (id) => {
    router.push(`/bookings/${id}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <ListGroup>
            {data.map((booking) => (
              <ListGroup.Item key={booking.id} className="d-flex justify-content-between align-items-center py-3">
                <div>
                  <a className="text-decoration-none text-dark" style={{ cursor: 'pointer' }} onClick={() => viewBookingDetails(booking.id)}>
                    <strong>A Booking on <FormatDate dateString={booking.date} /></strong> starting at {booking.start_time}
                  </a>
                </div>
                <Button variant="primary" onClick={() => viewBookingDetails(booking.id)}>
                  View Details
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
