import { createSlice } from "@reduxjs/toolkit";

const OperationSlice = createSlice({
  name: "operation",
  initialState: { dataLoaded: false, showChart: false },
  reducers: {
    setOperations: (state, action) => {
      return { dataLoaded: true, operations: action.payload };
    },
    setSelectedItem:(state,action)=>{
      return {...state,isSelected:true,selectedItem:action.payload}
    }
  },
});
const { actions, reducer } = OperationSlice;
export const { setOperations,setSelectedItem } = actions;
export default reducer;
