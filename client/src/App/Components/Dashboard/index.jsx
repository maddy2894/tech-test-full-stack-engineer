import React from 'react';
import DisplayConsole from '../DisplayConsole';
import ControlCapsule from '../ControlCapsule';
import axios from 'axios';

export default function Dashboard() {
  axios.get('http://localhost:4000/api/capsules/all').then((data) => {
    console.log(data);
  });
  return (
    <>
      <DisplayConsole></DisplayConsole>
      <ControlCapsule></ControlCapsule>
    </>
  );
}
