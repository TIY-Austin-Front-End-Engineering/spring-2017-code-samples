export default function logger (store) {
  return function (next) {
    return function (action) {
      console.groupCollapsed(action.type);
      console.info('Dispatched:', action)

      let result = next(action)

      console.log('New State:', store.getState())
      console.groupEnd(action.type)

      return result
    }
  }
}
