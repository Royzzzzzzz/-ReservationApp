import { createSlice } from "@reduxjs/toolkit";

// 초기 상태를 정의합니다. 여기에는 선택된 카테고리와 레스토랑 목록이 포함됩니다.
const initialState = {
  restaurants: [
    {
      id: 1,
      category: 1,
      name: "쥬스 떡볶이",
      rating: 4.5,
      imageUrl: "/images/list_001.png",
    },
    {
      id: 2,
      name: "홍짜장",
      category: 3,
      rating: 4.0,
      imageUrl: "/images/list_002.png",
    },
    {
      id: 3,
      category: 4,
      name: "순혁치킨",
      rating: 3.5,
      imageUrl: "/images/list_002.png",
    },
    {
      id: 4,
      category: 4,
      name: "호석치킨",
      rating: 3.0,
      imageUrl: "/images/list_002.png",
    },
    {
      id: 5,
      category: 2,
      name: "호석초밥",
      rating: 3.0,
      imageUrl: "/images/list_002.png",
    },
    {
      id: 6,
      category: 5,
      name: "순 커피",
      rating: 3.0,
      imageUrl: "/images/list_002.png",
    },
  ],
  selectedCategory: 0,
};
// 리덕스 툴킷의 createSlice를 사용하여 슬라이스를 생성합니다.
const restaurantSlice = createSlice({
  name: "restaurant", // 슬라이스의 이름
  initialState, // 초기 상태
  reducers: {
    // 리듀서 및 해당 액션을 정의합니다.
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload; // 선택된 카테고리를 업데이트합니다.
    },
  },
});
// 생성된 액션 생성 함수를 내보냅니다.
export const { setSelectedCategory } = restaurantSlice.actions;
// 리듀서를 기본 내보내기로 내보냅니다.
export default restaurantSlice.reducer;
