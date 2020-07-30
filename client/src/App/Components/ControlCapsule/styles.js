import styled from 'styled-components';

const CapsuleButtonWrapper = styled.div`
  grid-area: button;
  display: flex;
  place-content: center;
  align-items: center;
`;

const CapsuleButton = styled.button`
  height: 50px;
  width: 50%;
`;

const RocketWrapper = styled.div`
  grid-area: rocket;
  display: flex;
  place-content: center;
`;

const LandingPadWrapper = styled.div`
  grid-area: landing;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const LandingPadButton = styled.button`
  height: 50px;
  width: 45%;
`;

const LandingPadInput = styled.input`
  height: 45px;
  width: 45%;
`;

export {
  CapsuleButtonWrapper,
  CapsuleButton,
  RocketWrapper,
  LandingPadWrapper,
  LandingPadButton,
  LandingPadInput,
};
