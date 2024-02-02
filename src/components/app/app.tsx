import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import ProductPage from '../../pages/product/product-page';
import BasketPage from '../../pages/basket-page/basket-page';
import PageHeader from '../page-header/page-header';
import ErrorPage from '../../pages/error-page/error-page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<PageHeader />}
        >
          <Route
            index element={<MainPage />}
          >
          </Route>
          <Route path={AppRoute.Product}>
            <Route
              path=":id"
              element={<ProductPage />}
            >
            </Route>
          </Route>
          <Route
            path={AppRoute.Basket}
            element={<BasketPage />}
          >
          </Route>
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
