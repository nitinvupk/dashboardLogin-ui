import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e6e6e6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 60px auto 0px auto;
  h2 {
    margin-top: 0px;
    color: #226ba7;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    label {
      margin-bottom: 6px;
    }
    input {
      padding: 10px;
      border: solid 1px #a5a5a5;
      outline: none;
    }
  }
  .submit-btn {
    margin-top: 20px;
    button {
      background-color: #226ba7;
      padding: 10px 30px;
      color: #fff;
      border: none;
    }
  }
`;