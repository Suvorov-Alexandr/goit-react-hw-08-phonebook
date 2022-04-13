import { createReducer } from "@reduxjs/toolkit";
import { inputСhanges } from "./actions";

const filter = createReducer("", {
  [inputСhanges]: (_, { payload }) => payload,
});

export { filter };
