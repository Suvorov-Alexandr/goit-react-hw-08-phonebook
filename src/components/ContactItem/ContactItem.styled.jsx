import styled from "styled-components";

const Text = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #0a65ee;
  width: 70px;
  min-width: 70px;
  font-size: 13px;
  padding: 5px;
  color: #000;
  border-radius: 5px;
  transition: transform 250ms linear;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:nth-child(1):hover {
    background-color: #fd1d1d;
    transform: scale(1.1);
    color: #e8fcba;
  }

  &:nth-child(2):hover {
    background-color: #148f1e;
    transform: scale(1.1);
    color: #e8fcba;
  }
`;

export { Text, Item, Button };
