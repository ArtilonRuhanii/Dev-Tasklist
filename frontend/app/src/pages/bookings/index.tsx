// pages/bookings/index.tsx
'use client';

import { useEffect, useState } from 'react';
import BookingList from '@/components/BookingList';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Bookings (){
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
        try {
          const res = await fetch('http://localhost:5000/api/bookings'); // Use the proxied endpoint
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await res.json();
          console.log('Fetched booking data:', data);
          setBookings(data);
        } catch (error) {
          console.error('Failed to fetch booking:', error);
        } finally {
          setLoading(false);
        }
      };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <BookingList  bookings={bookings}/>
    </div>
  );
};
