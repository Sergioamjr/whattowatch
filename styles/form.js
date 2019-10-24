import styled from "styled-components";

export const Input = styled.input`
  width: ${props => (props.inline ? "auto" : "100%")};
  border-radius: 3px;
  border: 1px solid #b3b3b3;
  padding: 5px;
  font-size: 16px;
  color: #4c4c4c;
  display: ${props => (props.inline ? "inline-block" : "block")};
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #2f2f2f;
  padding-left: 5px;
  display: ${props => (props.inline ? "inline-block" : "block")};
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
  display: ${props => (props.inline ? "inline-block" : "")};
  margin-right: ${props => (props.inline ? "15px" : "")};
`;
