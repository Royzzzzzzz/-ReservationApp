import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/Slice.js/restaurantSlice";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Rating,
  Tabs,
  Tab,
} from "@mui/material";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

export default function Home() {
  // useDispatch 훅을 사용하여 dispatch 함수를 가져옵니다.
  const dispatch = useDispatch();
  // useSelector 훅을 사용하여 스토어의 상태(여기서는 selectedCategory와 restaurants)를 가져옵니다.
  const { restaurants, selectedCategory } = useSelector(
    (state) => state.restaurant
  );
  // 탭 변경 핸들러 함수
  const handleTabChange = (event, newValue) => {
    // 액션을 디스패치하여 선택된 카테고리를 업데이트합니다.
    dispatch(setSelectedCategory(newValue));
  };
  // 필터링된 레스토랑 목록을 계산합니다.
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return selectedCategory === 0 || restaurant.category === selectedCategory;
  });

  return (
    <>
      <Tabs value={selectedCategory} onChange={handleTabChange} centered>
        <Tab label="모두" value={0} />
        <Tab label="한식" value={1} />
        <Tab label="일식" value={2} />
        <Tab label="중식" value={3} />
        <Tab label="치킨" value={4} />
        <Tab label="디저트" value={5} />
      </Tabs>

      <Grid container spacing={2} className="gridContainer">
        {filteredRestaurants.map((restaurant) => (
          <Grid item key={restaurant.id} xs={6} sm={6} md={3}>
            <Card>
              <CardContent>
                <div
                  style={{ width: "100%", height: "150px", overflow: "hidden" }}
                >
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.name}
                </Typography>
                <Rating value={restaurant.rating} precision={0.5} readOnly />
              </CardContent>
              <CardActions>
                <Button fullWidth variant="outlined">
                  주문하기
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
