"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Introduction() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <h1>Welcome to My Website</h1>
    </div>
  );
}
