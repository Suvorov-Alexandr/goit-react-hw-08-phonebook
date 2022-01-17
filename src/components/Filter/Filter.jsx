import { Wrapper, Text, Input } from "./Filter.styled";
import PropTypes from "prop-types";

function Filter({ value, handleInputChange }) {
  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={value}
      ></Input>
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;
