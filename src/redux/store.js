import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./Slice.js/restaurantSlice";

// configureStore를 사용하여 리덕스 스토어를 생성합니다.
export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // 슬라이스 리듀서를 스토어에 추가합니다.
  },
});
