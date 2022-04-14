import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Wrapper = styled.div`
  margin: 0 auto 30px auto;
  padding: 15px;
  display: block;
  width: 350px;
  text-align: center;
`;

const Form = styled.form`
  width: 300px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 15px;
`;

const Input = styled(TextField)`
  display: block;
  width: 300px;
  border: 2px solid #0a65ee;
  border-radius: 3px;
  padding: 6px 10px;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  display: block;
  width: 115px;
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

  &:hover {
    background-color: #148f1e;
    transform: scale(1.1);
    color: #e8fcba;
  }
`;

export { Wrapper, Form, Label, Input, Button };
