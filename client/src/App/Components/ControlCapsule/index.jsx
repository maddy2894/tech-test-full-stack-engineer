import React from 'react';
import { ReactComponent as Rocket } from '../../../assets/rocket.svg';
import {
  CapsuleButtonWrapper,
  CapsuleButton,
  RocketWrapper,
  LandingPadWrapper,
  LandingPadButton,
  LandingPadInput,
} from './styles';

export default function ControlCapsule() {
  return (
    <>
      <CapsuleButtonWrapper>
        <CapsuleButton>Capsule</CapsuleButton>
      </CapsuleButtonWrapper>
      <RocketWrapper>
        <Rocket />
      </RocketWrapper>
      <LandingPadWrapper>
        <LandingPadInput></LandingPadInput>
        <LandingPadButton>Landing Pad</LandingPadButton>
      </LandingPadWrapper>
    </>
  );
}
