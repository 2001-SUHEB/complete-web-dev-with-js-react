const initialCounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};


export default counterReducer;