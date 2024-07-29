// pages/bookings/[id]/index.tsx
'use client';

import BookingDetails from '@/components/BookingDetails';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BookingbyId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    console.log('Fetching booking with ID:', id); 
    const fetchBooking = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bookings/${id}`); 
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log('Fetched booking data:', data);
        setBooking(data);
      } catch (error) {
        console.error('Failed to fetch booking:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!booking) return <p>No booking found</p>;

  const handleBackClick = () => {
    router.push('/bookings');
  };

  return (
    <div>
      <BookingDetails  booking={booking}/>
    </div>
  );
};

export default BookingbyId;