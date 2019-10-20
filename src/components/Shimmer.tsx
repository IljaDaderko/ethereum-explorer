import styled from 'styled-components';

const Shimmer = styled.div`
  background: rgba(244, 50, 127, 0.1);
  background-image: linear-gradient(
    to right,
    rgba(244, 50, 127, 0.1) 0%,
    rgba(244, 50, 127, 0.3) 20%,
    rgba(244, 50, 127, 0.1) 40%,
    rgba(244, 50, 127, 0.1) 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: block;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  text-indent: -9999px;

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;

export default Shimmer;
