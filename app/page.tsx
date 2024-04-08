import React from 'react';
import Hello from './Components/Hello/page';
import Image from 'next/image';
import eventorbdLogo from '../public/eventorbdLogo.svg';

export default function Home() {
  return (
    <main>
      <Image src={eventorbdLogo} alt="EventorBD Logo" />
      <Hello />
    </main>
  );
}
