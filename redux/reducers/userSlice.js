import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    email: "",
    fullname: "",
    address: "",
    type: "",
    profile_picture: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { id, email, fullname, address, type, profile_picture } =
        action.payload;
      state.id = id;
      state.fullname = fullname;
      state.type = type;
      state.address = address;
      state.email = email;
      state.profile_picture = profile_picture;
    },
    removeUser: (state) => {
      // Reset all user fields to initial values
      state.id = null;
      state.fullname = "";
      state.type = "";
      state.address = "";
      state.email = "";
      state.profile_picture = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
