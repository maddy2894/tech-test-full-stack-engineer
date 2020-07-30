import styled from 'styled-components';

const CapsuleButtonWrapper = styled.div`
  grid-area: button;
  display: flex;
  place-content: center;
  align-items: center;
`;

const CapsuleButton = styled.button`
  height: 50%;
  width: 86%;
  @media screen and (max-width: 768px) {
    height: 25%;
  }
`;

const RocketWrapper = styled.div`
  grid-area: rocket;
  display: flex;
  place-content: center;
`;

const LandingPad = styled.div`
  grid-area: landing;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LandingPadWrapper = styled.div`
  width: 86%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const LandingPadButton = styled.button`
  height: 50%;
  width: 45%;
  @media screen and (max-width: 768px) {
    height: 25%;
    width: 85%;
  }
`;

const LandingPadInput = styled.input`
  height: 45%;
  width: 45%;
  @media screen and (max-width: 768px) {
    height: 25%;
    width: 85%;
  }
`;

export {
  CapsuleButtonWrapper,
  CapsuleButton,
  RocketWrapper,
  LandingPad,
  LandingPadWrapper,
  LandingPadButton,
  LandingPadInput,
};
