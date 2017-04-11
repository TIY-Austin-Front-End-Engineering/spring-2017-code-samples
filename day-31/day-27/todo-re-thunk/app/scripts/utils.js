const utils = {
  copyState: (oldState, newState) => {
    return Object.assign({}, oldState, newState);
  },
  newState: (oldState) => (newState) => {
    return Object.assign({}, oldState, newState);
  }
}

export default utils
