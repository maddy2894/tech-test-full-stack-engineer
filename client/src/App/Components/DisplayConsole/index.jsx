import React from 'react';
import { Console } from './styles';
import { useSelector } from 'react-redux';

export default function DisplayConsole() {
  const capsuleData = useSelector((state) => state.spaceData);

  return (
    <Console>
      {capsuleData.initial ? (
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 15px',
          }}
        >
          Please click on Capsules or enter a value inside input and click on
          Landing Pad
        </div>
      ) : capsuleData.error ? (
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 15px',
            color: 'red',
          }}
        >
          {capsuleData.errorMessage}
        </div>
      ) : (
        capsuleData.capsule?.map((obj, i) => (
          <pre key={i}>{JSON.stringify(obj, null, 2)}</pre>
        ))
      )}
    </Console>
  );
}
