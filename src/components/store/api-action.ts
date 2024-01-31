import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../state';
import { AxiosInstance } from 'axios';
import { CatalogItemTypes } from '../../types/catalog-item-type';
import { loadCatalogItems, loadCurrentItem } from './action';
import { APIRoute } from '../../const';
import { CatalogItemType } from '../../types/common-type';
import { CameraId } from '../../types/api';

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

export const loadItemData = createAsyncThunk<void, CameraId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'camera/load',
  async({id}, {dispatch, extra: api })=>{
    const {data} = await api.get<CatalogItemType>(`${APIRoute.AllCatalog}/${id}`);
    dispatch(loadCurrentItem(data));
  }
);
