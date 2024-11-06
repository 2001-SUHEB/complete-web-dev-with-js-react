const initialUserState = {
  name: "",
  age: 0,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

export default userReducer;
