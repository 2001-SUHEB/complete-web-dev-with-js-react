export const increment = () => ({
  type: "increment",
});

export const decrement = () => ({
  type: "decrement",
});

export const setName = (name) => ({
  type: "setName",
  payload: name,
});

export const setAge = (age) => ({
  type: "setAge",
  payload: age,
});
