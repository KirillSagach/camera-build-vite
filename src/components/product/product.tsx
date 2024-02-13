import { useState } from 'react';
import AddPopUp from '../add-popup/add-popup';
import Footer from '../footer/footer';
import { useAppSelector } from '../hooks';
import ProductContainer from './product-container';
import ProductReview from './product-review';
import ProductSimilar from './product-similar';
import { PopUpType } from '../../types/common-type';

function Product(): JSX.Element {

  const [show,setShow] = useState(false);
  const setPopup = () => {
    setShow(!show);
  };

  const currentItem = useAppSelector((state) => state.currentItem);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTopQuick = () => {
    window.scrollTo({ top: 0 });
  };

  scrollToTopQuick();

  return (
    <div className="wrapper">
      <main>
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
                  <a className="breadcrumbs__link" href="catalog.html">
                    Каталог
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini" />
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">
                    {currentItem.name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content__section">
            <ProductContainer />
          </div>
          <div className="page-content__section">
            <ProductSimilar />
          </div>
          <div className="page-content__section">
            <ProductReview
              onHandleClick={setPopup}
            />
          </div>
        </div>
      </main>
      <a className="up-btn"
        onClick={() => {
          scrollToTop();
        }}
      >
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </a>
      <AddPopUp
        isPopupShow={show}
        onHandleClick={setPopup}
        currentHoverItem={0}
        popupType = {PopUpType.Review}
      />
      <Footer />
    </div>
  );
}

export default Product;
