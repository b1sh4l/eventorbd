import React from 'react';
import eventorbdLogo from '../../assets/eventorbdLogo.svg';
import Image from 'next/image';



const Hello = () => {
  return (
    <div>
      
      <Image src={eventorbdLogo} alt="EventorBD Logo" width={200} height={200} />
      EventorBD!!!
    </div>
  );
};

export default Hello;