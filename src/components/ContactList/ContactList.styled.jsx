import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto 5px auto;
  padding: 15px;
  display: block;
  width: 325px;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #0a65ee;
  width: 70px;
  min-width: 70px;
  font-size: 13px;
  padding: 5px;
  color: #000;
  border-radius: 5px;

  &:hover {
    background-color: #f34141;
  }
`;

export { Wrapper, Text, List, Item, Button };
