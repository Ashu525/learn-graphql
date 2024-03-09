import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }
  input,
  select {
    height: 2em;
    width: 15em;
  }
  button {
    height: 2em;
    width: 50%;
    border-radius: 5px;
    align-self: center;
  }
`;
