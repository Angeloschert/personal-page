import React, { useState, useEffect } from 'react';

const YOE = () => {
  const [yoe, setYoe] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const startTime = new Date('2016-06-01T09:24:00');
    setYoe(((Date.now() - startTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{yoe}</>;
};

const data = [
  {
    key: 'yoe',
    label: 'Years of Experience',
    value: <YOE />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 63,
    link:
      'https://www.google.com/maps/d/edit?mid=1dJr-_bFdobI0wP5rLIIRrZZKCBzhh3fW&ll=0.2761886603228305%2C0&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Toronto, ON',
  },
];

export default data;
