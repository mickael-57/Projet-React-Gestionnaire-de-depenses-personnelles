import {useReducer} from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add_depense":
      return [...state, action.payload]; 

    case "delete_depense":
      return state.filter(depense => depense.id !== action.payload.id);

    case "update_depense":
      return state.map(depense =>
        depense.id === action.payload.id
          ? { ...depense, ...action.payload }
          : depense
      );

    case "reset":
      return initialState;

    default:
      return state;
  }
};
  
const useDepensesReducer = () => useReducer(reducer, initialState)

export default useDepensesReducer