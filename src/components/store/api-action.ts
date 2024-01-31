import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../state';
import { AxiosInstance } from 'axios';
import { CatalogItemTypes } from '../../types/catalog-item-type';
import { loadCatalogItems } from './action';
import { APIRoute } from '../../const';

export const loadData = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/load',
  async(_arg, {dispatch, extra: api })=>{
    const {data} = await api.get<CatalogItemTypes>(APIRoute.AllCatalog);
    dispatch(loadCatalogItems(data));
  }
);
