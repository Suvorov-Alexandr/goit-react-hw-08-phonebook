import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Text, Input } from "./Filter.styled";
import * as actions from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const setFilter = ({ currentTarget: { value } }) =>
    dispatch(actions.inputСhanges(value));

  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={setFilter}
        value={value}
      ></Input>
    </Wrapper>
  );
}

export default Filter;
