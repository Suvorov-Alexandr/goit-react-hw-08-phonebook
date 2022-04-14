import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Wrapper, Text, Input } from "./Filter.styled";
import { inputСhanges } from "redux/actions";
import { getFilter } from "redux/selectors";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const setFilter = ({ target: { value } }) => dispatch(inputСhanges(value));

  return (
    <Wrapper>
      <Text>
        <PersonSearchIcon color="primary" fontSize="small" /> Find contacts by
        name
      </Text>
      <DebounceInput
        element={Input}
        minLength={2}
        debounceTimeout={300}
        margin="normal"
        size="small"
        label="Find contact..."
        type="text"
        name="filter"
        onChange={setFilter}
        value={value}
        placeholder="Enter contact name..."
      ></DebounceInput>
    </Wrapper>
  );
}

export default Filter;
