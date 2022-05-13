import styled from "styled-components";

const NavUnlisted = styled.ul`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
    border: 2px solid whitesmoke;
    border-radius: 30px;
    padding: 7px;
  }

  .active {
    li {
      border: 2px solid #00ff06;
    }
  }
`;

export default NavUnlisted;
