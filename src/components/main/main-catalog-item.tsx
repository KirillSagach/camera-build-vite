import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../hooks';
import { PopUpType } from '../../types/common-type';
import ItemRating from '../item-rating/item-rating';

type CatalogItemProps = {
  onHandleClick: (showPopUp: boolean, popType: PopUpType) => void;
  onHandleItemHover: (id: number) => void;
  isPopUpShow: boolean;
  currentPage: number;
}

function CatalogItem({ onHandleClick, onHandleItemHover, isPopUpShow, currentPage }: CatalogItemProps): JSX.Element {

  const catalogItems = useAppSelector((state) => state.catalogItems);

  let startPage = 0;
  let endPage = 0;

  const modifyStartEndPages = (page: number) => {
    if (page < 2) {
      startPage = 0;
      endPage = 9;
    } else {
      const modifiedPage = page - 1;
      const proxyStartPage = `${modifiedPage.toString()}0`;
      const proxyEndPage = `${modifiedPage.toString()}9`;
      startPage = parseInt(proxyStartPage, 10);
      endPage = parseInt(proxyEndPage, 10);
    }
  };

  modifyStartEndPages(currentPage);

  const currentCatalogItems = catalogItems.slice(startPage, endPage);

  return (

    <>
      {
        currentCatalogItems.map((item) => (
          <div key={item.id} className="product-card"
            onMouseEnter={(evt) => {
              if (!isPopUpShow) {
                evt.preventDefault();
                onHandleItemHover(item.id);
              }
            }}
            onMouseLeave={(evt) => {
              if (!isPopUpShow) {
                evt.preventDefault();
                onHandleItemHover(0);
              }
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
                <ItemRating
                  rating={item.rating}
                />
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
                onClick={() => onHandleClick(true, PopUpType.Item)}
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
