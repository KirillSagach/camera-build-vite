import { combineReducers} from '@reduxjs/toolkit';
import { catalogReducer } from './catalog-reducer';
import { itemReducer } from './item-reducer';


export const reducer = combineReducers(
  {
    catalogReducer: catalogReducer,
    itemReducer: itemReducer
  }
);
