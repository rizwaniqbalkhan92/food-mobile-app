import { configureStore } from '@reduxjs/toolkit'
import defaultTheme from '../Reducer/Theme'

export const store = configureStore({
  reducer: {
    theme:defaultTheme,
  },
})