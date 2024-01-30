import Footer from '../footer/footer';
import ProductContainer from './product-container';
import ProductReview from './product-review';
import ProductSimilar from './product-similar';

function Product(): JSX.Element {
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
                    Ретрокамера Das Auge IV
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content__section">
            <ProductContainer/>
          </div>
          <div className="page-content__section">
            <ProductSimilar/>
          </div>
          <div className="page-content__section">
            <ProductReview/>
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </a>
      <Footer/>
    </div>
  );
}

export default Product;
