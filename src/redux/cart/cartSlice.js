import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [
      {
        id: '20',
        new: 1,
        title: 'Повседневная хлопковая футболка',
        price: 990,
        raiting: 3.8,
        sex: '0',
        desc: 'Невероятно комфортная базовая хлопковая футболка правильной длины. Ее удобно заправлять и носить навыпуск. Модель имеет свободную посадку и рукав с отворотом.Выполнена из плотного хлопкового трикотажного полотна высокого качества.',
        images: [
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/3360/465005856/17050100_10_1.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/3361/465005857/17050100_10_D1_1.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/3362/465005858/17050100_10_R_1.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/3363/465005859/17050100_10-99999999_01_1.jpg',
          },
        ],
        firstImage:
          'https://static.insales-cdn.com/images/products/1/3360/465005856/17050100_10_1.jpg',
        country: 'Турция',
        compound: 'Хлопок',
        variants: ['S', 'M', 'L', 'XL'],
      },
      {
        id: '21',
        new: 1,
        title: 'Твидовый кардиган из хлопка',
        price: 7490,
        raiting: 3.7,
        sex: '0',
        desc: 'Женский жакет из ткани твидовой фактуры имеет простой силуэт, без застежек, фиксируется длинным поясом из основной ткани. Жакет кимоно выполнен без подклада, срезы обработаны хлопковой косой бейкой. ',
        images: [
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4006/465006502/17024061_43.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4007/465006503/17024061_43_D1.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4008/465006504/17024061_43_R.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4011/465006507/17024061_43-99999999_01.jpg',
          },
        ],
        firstImage:
          'https://static.insales-cdn.com/images/products/1/4006/465006502/17024061_43.jpg',
        country: 'Италия',
        compound: 'Хлопок',
        variants: ['S', 'M', 'L', 'XL'],
      },
      {
        id: '22',
        new: 1,
        title: 'Объемный водоотталкивающий тренч',
        price: 4990,
        raiting: 4.2,
        sex: '0',
        desc: 'Двубортный тренчкот - это бежевый плашь, которые идеально подойдет на весну, лето или осень. Не короткий и не утепленный, подойдет любой девочке, женщине!',
        images: [
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4851/465007347/17024061_43_R.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4848/465007344/17024061_43.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4849/465007345/17024061_43_D1.jpg',
          },
          {
            imageUrl:
              'https://static.insales-cdn.com/images/products/1/4852/465007348/17024061_43-99999999_01.jpg',
          },
        ],
        firstImage:
          'https://static.insales-cdn.com/images/products/1/4851/465007347/17024061_43_R.jpg',
        country: 'Португалия',
        compound: 'Экохлопок',
        variants: ['S', 'M', 'L', 'XL'],
      },
    ],
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    setItemInCart(state, action) {
      state.itemsInCart.push(action.payload);
      state.totalCount = state.itemsInCart.length;
      state.totalPrice = state.itemsInCart.reduce(
        (sum, itemInCart) => (sum += itemInCart.price),
        0,
      );
    },
    deleteItemFromCart(state, action) {
      state.itemsInCart = state.itemsInCart.filter((item) => item.id !== action.payload);
      state.totalCount = state.itemsInCart.length;
      state.totalPrice = state.itemsInCart.reduce(
        (sum, itemInCart) => (sum += itemInCart.price),
        0,
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
