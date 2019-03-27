const userReducer = (state= {
    name:"babu",
    age:25
}, action) => {
  switch(action.type){
      case "SET_NAME":
      state={
          ...state,
          name: action.payload
      };
     // state.lastValues.push(action.payload);
      break;
      case "SET_AGE":
      state={
        ...state,
        age: action.payload
    };
   // state.lastValues.push(action.payload);
      break;
      default:
      break;
  }
  return state;
};
export default userReducer;