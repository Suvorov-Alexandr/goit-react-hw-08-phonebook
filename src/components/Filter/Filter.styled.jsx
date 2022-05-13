import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Wrapper = styled.div`
  margin: 0 auto 15px auto;
  padding: 15px;
  display: block;
  width: 333px;
  text-align: center;
`;

const Text = styled.p`
  font-weight: 700;
  letter-spacing: 0.03em;
`;

const Input = styled(TextField)`
  display: block;
  width: 300px;
  outline: none;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1;
  background: transparent;
`;

export { Wrapper, Text, Input };
