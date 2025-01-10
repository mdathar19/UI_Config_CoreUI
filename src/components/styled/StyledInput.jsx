import React from 'react';
import styled from 'styled-components';

// Styled input field
const StyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 5px;
  outline: none;
  box-shadow: ${(props) => (props.focused ? '0 0 5px rgba(0, 0, 255, 0.5)' : 'none')};
  transition: box-shadow 0.2s, border-color 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const ErrorText = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  font-size: 14px;
`;

// React Component
const Input = ({ label, error, ...props }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} error={!!error} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

export default Input;
