import { useState } from 'react';
import Footer from '../footer/footer';
import CatalogItems from './main-catalog-items';
import MainFilterForm from './main-filter-form';
import MainSortForm from './main-sort-form';
import Pagination from './main-pagination';
import AddPopUp from '../add-popup/add-popup';
import { PopUpType } from '../../types/common-type';

function Main(): JSX.Element {

  const [popUp, setPopUp] = useState({
    show: false,
    popUpType: PopUpType.Review
  });

  const setPopupSettings = (showPopUp: boolean, popType: PopUpType) => {
    setPopUp({
      show: showPopUp,
      popUpType: popType
    });
  };
  const [hoveredItemId, setHoveredItemId] = useState(0);
  const onHandleItemHover = (currentId: number) => {
    setHoveredItemId(currentId);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const onHandlePagItem = (currentId: number) => {
    setCurrentPage(currentId);
  };

  return (
    <>
      <main>
        <div className="banner">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/banner-bg.webp, img/content/banner-bg@2x.webp 2x"
            />
            <img
              src="img/content/banner-bg.jpg"
              srcSet="img/content/banner-bg@2x.jpg 2x"
              width={1280}
              height={280}
              alt="баннер"
            />
          </picture>
          <p className="banner__info">
            <span className="banner__message">Новинка!</span>
            <span className="title title--h1">
              Cannonball&nbsp;Pro&nbsp;MX&nbsp;8i
            </span>
            <span className="banner__text">
              Профессиональная камера от&nbsp;известного производителя
            </span>
            <a className="btn" href="#">
              Подробнее
            </a>
          </p>
        </div>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="index.html">
                    Главная
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini" />
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">
                    Каталог
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <MainFilterForm/>
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <MainSortForm/>
                  </div>
                  <CatalogItems
                    onHandleClick={setPopupSettings}
                    onHandleItemHover = {onHandleItemHover}
                    isPopUpShow = {popUp.show}
                    currentPage={currentPage}
                  />
                  <Pagination
                    onHandlePagClick={onHandlePagItem}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <AddPopUp
          isPopupShow={popUp.show}
          onHandleClick={setPopupSettings}
          currentHoverItem={hoveredItemId}
          popUpType={PopUpType.Item}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Main;
