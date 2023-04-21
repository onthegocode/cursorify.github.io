import styled from '@emotion/styled'
import OpenColor from 'open-color'

export const StyledWrapper = styled.header`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  background: ${OpenColor.violet[9]};
  color: ${OpenColor.white};
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 996px) {
    header {
      padding: 2rem;
    }
  }
`
