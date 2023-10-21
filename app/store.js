const { configureStore } = require("@reduxjs/toolkit")
const carReducer = require("../features/cars/carSlice")

const store = configureStore({
  reducer: {
    car: carReducer,
  },
})

module.exports = store
