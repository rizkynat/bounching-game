import styled, {keyframes} from 'styled-components';

const bounce = keyframes`
   from, to  {
    bottom: 0;
    animation-timing-function: ease-out;
  }
  50% {
    bottom: 220px;
    animation-timing-function: ease-in;
  }
`;

const spin = keyframes`
from {
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  } 
`;

const Bouncer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: red;
  background: -webkit-radial-gradient(
      60% 40%,
      circle,
      rgba(255, 255, 255, 0.8),
      red 50%
    )
    red;
  background: -moz-radial-gradient(
      60% 40%,
      circle,
      rgba(255, 255, 255, 0.8),
      red 50%
    )
    red;
  background: -o-radial-gradient(
      60% 40%,
      circle,
      rgba(255, 255, 255, 0.8),
      red 50%
    )
    red;
  background: -ms-radial-gradient(
      60% 40%,
      circle,
      rgba(255, 255, 255, 0.8),
      red 50%
    )
    red;
  background: radial-gradient(
      60% 40%,
      circle,
      rgba(255, 255, 255, 0.8),
      red 50%
    )
    red;

  -webkit-animation-name: ${bounce}, ${spin};
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 4.2s;

  animation-name: ${bounce}, ${spin};
  animation-iteration-count: infinite;
  animation-duration: 4.2s;
`;

function BounchingMaterial(): JSX.Element {
  return <Bouncer />;
}

export default BounchingMaterial;
