import styled from 'styled-components';

const Shimmer = styled.div`
  background: rgba(244, 50, 127, 0.1);
  background: linear-gradient(
    to right,
    rgba(244, 50, 127, 0.1) 0%,
    rgba(244, 50, 127, 0.3) 50%,
    rgba(244, 50, 127, 0.1) 100%
  );

  background-size: 500% 500%;

  display: block;

  animation: shimmer 2s ease infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Shimmer;
