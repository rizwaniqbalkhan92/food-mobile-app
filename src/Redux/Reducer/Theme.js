      
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 value:0
}

export const defaultTheme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeColor: (state) => {
      return state.value+1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeThemeColor} = defaultTheme.actions

export default defaultTheme.reducer