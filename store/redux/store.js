import { configureStore } from "@reduxjs/toolkit";

import favMeals from "./favorites";

export const store = configureStore({
  reducer: {
    favMeals: favMeals,
  },
});
