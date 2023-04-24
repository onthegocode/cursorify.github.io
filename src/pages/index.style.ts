import styled from '@emotion/styled'
import OpenColor from 'open-color'

// TODO: light mode
const StyledWrapper = styled.div`
  main {
    display: flex;
    justify-content: center;
    padding: 80px 0;
  }
  .window {
    margin: 0 10px;
    border-radius: 12px;
    background-color: ${OpenColor.gray[9]};
    border: 1px solid ${OpenColor.gray[8]};
    width: 100%;
    overflow: hidden;
  }
  .window > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: ${OpenColor.gray[8]};
  }
  .window > .header > .lt {
    display: flex;
    gap: 14px;
  }
  .window > .header > .lt > .btn {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    &[data-type='close'] {
      background-color: ${OpenColor.red[7]};
    }
    &[data-type='minimize'] {
      background-color: ${OpenColor.yellow[7]};
    }
    &[data-type='maximize'] {
      background-color: ${OpenColor.green[7]};
    }
  }
  .window > .content {
    padding: 50px 0 70px;
  }
  .window > .content > .title {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    padding-bottom: 30px;
    gap: 15px;
  }
  .window > .content > .title > h2 {
    font-weight: 500;
    color: ${OpenColor.gray[1]};
  }
  .window > .content > .title > .description {
    color: ${OpenColor.gray[5]};
    font-weight: 200;
    text-align: center;
  }
  .window > .content > .cursors {
    display: flex;
    justify-content: center;
    gap: 80px;
    padding: 50px 0 60px;
    .cursor {
      color: ${OpenColor.gray[4]};
      width: 100px;
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 10px;
      .cursor-wrapper {
        background-color: ${OpenColor.gray[7]};
        padding: 15px;
        border-radius: 12px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.phinger {
          > * {
            margin-right: 12px;
            margin-bottom: 20px;
          }
        }
      }
      .title {
        font-weight: 300;
        color: ${OpenColor.gray[1]};
        margin-top: 10px;
      }
      .description {
        color: ${OpenColor.gray[5]};
        font-weight: 200;
      }
    }
  }
  .window > .content > .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 40px;
    color: ${OpenColor.gray[2]};
    .option {
      display: flex;
      align-items: center;
      .label {
        width: 70px;
      }
      input {
        width: 300px;
      }
      .value {
        text-align: center;
        width: 70px;
        margin-left: 20px;
      }
    }
  }
`

export default StyledWrapper
