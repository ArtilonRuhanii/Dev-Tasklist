// components/BookingList.tsx
import BookingListGroup from './BookingListGroup';
import { useRouter } from 'next/router';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

export default function BookingList ({bookings}) {
  const router = useRouter();

  const createBook = () => {
    router.push('/newbooking');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="text-center mb-4">Bookings</h1>
          <BookingListGroup data={bookings}></BookingListGroup>
          <div className="mt-3 text-center">
            <Button variant="primary" onClick={createBook}>Book Here</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
