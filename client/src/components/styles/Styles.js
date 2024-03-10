import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #f2f2f2;
  padding: 1em;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }
  label {
    min-width: 5em;
  }
  input,
  select {
    height: 2em;
    width: 10em;
    &:hover {
      border: 1px solid grey;
    }
  }
  button {
    height: 2em;
    width: 50%;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
    &:hover {
      border: 1px solid white;
      box-shadow: 0 0 5px green;
    }
  }
`;

export const CenteredHeading = styled.h1`
  text-align: center;
`;

export const CenteredContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  li {
    cursor: pointer;
  }
`;
