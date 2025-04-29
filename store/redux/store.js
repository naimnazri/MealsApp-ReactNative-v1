import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favourites'

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

