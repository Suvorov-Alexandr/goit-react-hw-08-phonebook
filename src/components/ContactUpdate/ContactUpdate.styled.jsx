import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto 5px auto;
  padding: 15px;
  display: block;
  width: 350px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #202020;
`;

const Form = styled.form`
  width: 300px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 15px;
`;

const Input = styled.input`
  display: block;
  width: 300px;
  border: 2px solid #0a65ee;
  border-radius: 3px;
  padding: 6px 10px;
  outline: none;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  display: block;
  width: 100px;
  border: 0;
  border-radius: 5px;
  background: #0a65ee;
  color: #fff;
  font-weight: 400;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-transform: none;
  padding: 8px 10px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  transition: all 0.2s linear;
  min-width: 100px;
  white-space: nowrap;
  margin-bottom: 5px;
  transition: transform 250ms linear;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:nth-child(1):hover {
    background-color: #148f1e;
    transform: scale(1.1);
    color: #e8fcba;
  }

  &:nth-child(2):hover {
    background-color: #fd1d1d;
    transform: scale(1.1);
    color: #e8fcba;
  }
`;

export { Wrapper, ButtonsWrapper, Text, Form, Label, Input, Button };
