const store = require("./app/store")
const { carActions } = require("./features/cars/carSlice")

console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState())
})

store.dispatch(carActions.selled())
store.dispatch(carActions.selled())
store.dispatch(carActions.selled())
store.dispatch(carActions.buyed(3))

unsubscribe()
