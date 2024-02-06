import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../hooks';

type CatalogItemProps = {
  onHandleClick: () => void;
  onHandleItemHover: (id: number) => void;
}

function CatalogItem({ onHandleClick, onHandleItemHover }: CatalogItemProps): JSX.Element {

  const catalogItems = useAppSelector((state) => state.catalogItems);

  return (

    <>
      {
        catalogItems.map((item) => (
          <div key={item.id} className="product-card"
            onMouseEnter={(evt) => {
              evt.preventDefault();
              onHandleItemHover(item.id);
            }}
            onMouseLeave={(evt)=> {
              evt.preventDefault();
              onHandleItemHover(0);
            }}
          >
            <div className="product-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${item.previewImgWebp}, ${item.previewImgWebp2x} 2x`}
                />
                <img
                  src={item.previewImg}
                  srcSet={`${item.previewImg2x}`}
                  width={280}
                  height={240}
                  alt={item.name}
                />
              </picture>
            </div>
            <div className="product-card__info">
              <div className="rate product-card__rate">
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-full-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-full-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-full-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-star" />
                </svg>
                <p className="visually-hidden">Рейтинг: {item.rating}</p>
                <p className="rate__count">
                  <span className="visually-hidden">Всего оценок:</span>{item.reviewCount}
                </p>
              </div>
              <p className="product-card__title">
                {`${item.name}`}
              </p>
              <p className="product-card__price">
                <span className="visually-hidden">Цена:</span>{item.price} ₽
              </p>
            </div>
            <div className="product-card__buttons">
              <button
                className="btn btn--purple product-card__btn"
                type="button"
                onClick={() => onHandleClick()}
              >
                Купить
              </button>
              <Link to={`${AppRoute.Product}/${item.id}`} className="btn btn--transparent">
                Подробнее
              </Link>
            </div>
          </div >
        ))
      }
    </>


  );
}

export default CatalogItem;
