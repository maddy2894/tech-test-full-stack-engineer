import styled from "styled-components";

const Application = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
    justify-content: center;
    align-items: center;
}
  svg,
  span {
    padding-left: 10px;
  }
`;

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  display: grid;
  grid-template-rows: 66.7% 33.3%;
  grid-template-columns: 33% 33% 33%;
  grid-template-areas:
    "console console console"
    "button rocket landing";
`;

export { Application, Container };
