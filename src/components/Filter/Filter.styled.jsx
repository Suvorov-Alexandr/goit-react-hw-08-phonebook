import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Wrapper = styled.div`
  margin: 0 auto 5px auto;
  padding: 15px;
  display: block;
  width: 350px;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
`;

const Input = styled(TextField)`
  display: block;
  width: 300px;
  border: 2px solid #0a65ee;
  border-radius: 3px;
  padding: 6px 10px;
  outline: none;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1;
  margin-top: 5px;
  background: transparent;
`;

export { Wrapper, Text, Input };
