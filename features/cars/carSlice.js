// will be used to create car slice
const createSlice = require("@reduxjs/toolkit").createSlice

// initial state for cars
const initialState = {
  numberOfCars: 88,
}

// slice for car
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selled: (state) => {
      state.numberOfCars -= 1
    },
    buyed: (state, action) => {
      state.numberOfCars += action.payload
    },
  },
})

module.exports = carSlice.reducer
module.exports.carActions = carSlice.actions
