'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function Home  (){

    const router = useRouter();

    const goToBookings = () => {
        router.push('/bookings')
    }
 
  return<>
    <Button variant="primary" type="submit" className="mt-3" onClick={goToBookings}>
        Go To The Booking List
    </Button>
  </>
}
