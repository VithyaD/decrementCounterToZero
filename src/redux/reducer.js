export function reducer(state = 0, action) {
  switch (action.type) {
    case "START":
      return state - 1;
    case "STOP":
      return state;
    default:
      return (state = 0);
  }
}
