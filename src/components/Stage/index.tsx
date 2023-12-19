import styled, {keyframes} from 'styled-components';
import BounchingMaterial from '../BounchingMaterial';

const travel = keyframes`
    
  from { left: 0;     }
  to   { left: 640px; }
`;

const StageWrapper = styled.div`
  position: relative;
  margin: 1em auto;
  width: 660px;
  height: 240px;
  border: 2px solid #666;
  background: #cff;
`;

const Traveler = styled.div`
  position: absolute;
  width: 20px;
  height: 240px;
  background-color: green;

  -webkit-animation-name: ${travel};
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  -webkit-animation-duration: 4.8s;

  animation-name: ${travel};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 4.8s;
`;

function Stage(): JSX.Element {
  return (
    <>
      <StageWrapper>
        <Traveler>
          <BounchingMaterial />
        </Traveler>
      </StageWrapper>
    </>
  );
}

export default Stage;
