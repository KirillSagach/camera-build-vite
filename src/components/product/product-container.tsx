import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loadItemData, loadItemReviews } from '../store/api-action';
import ItemRating from '../item-rating/item-rating';

function ProductContainer(): JSX.Element {

  const params = useParams();
  const cameraId = params.id;

  const dispatch = useAppDispatch();
  const currentItem = useAppSelector((state) => state.currentItem);

  if (currentItem === undefined || currentItem.id.toString() !== cameraId) {
    dispatch(loadItemData({ id: cameraId }));
    dispatch(loadItemReviews({ id: cameraId }));
  }

  return (
    <section className="product">
      <div className="container">
        <div className="product__img">
          <picture>
            <source
              type="image/webp"
              srcSet={`${currentItem.previewImgWebp}, ${currentItem.previewImgWebp2x}`}
            />
            <img
              src={currentItem.previewImg}
              srcSet={`${currentItem.previewImg2x} 2x`}
              width={560}
              height={480}
              alt={currentItem.name}
            />
          </picture>
        </div>
        <div className="product__content">
          <h1 className="title title--h3">{currentItem.name}</h1>
          <div className="rate product__rate">
            <ItemRating
              rating={currentItem.rating}
            />
            <p className="visually-hidden">Рейтинг: {currentItem.rating}</p>
            <p className="rate__count">
              <span className="visually-hidden">Всего оценок:</span>{currentItem.reviewCount}
            </p>
          </div>
          <p className="product__price">
            <span className="visually-hidden">Цена:</span>{currentItem.price} ₽
          </p>
          <button className="btn btn--purple" type="button">
            <svg width={24} height={16} aria-hidden="true">
              <use xlinkHref="#icon-add-basket" />
            </svg>
            Добавить в корзину
          </button>
          <div className="tabs product__tabs">
            <div className="tabs__controls product__tabs-controls">
              <button className="tabs__control" type="button">
                Характеристики
              </button>
              <button className="tabs__control is-active" type="button">
                Описание
              </button>
            </div>
            <div className="tabs__content">
              <div className="tabs__element">
                <ul className="product__tabs-list">
                  <li className="item-list">
                    <span className="item-list__title">Артикул:</span>
                    <p className="item-list__text"> {currentItem.vendorCode}</p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Категория:</span>
                    <p className="item-list__text">{currentItem.category}</p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Тип камеры:</span>
                    <p className="item-list__text">{currentItem.type}</p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Уровень:</span>
                    <p className="item-list__text">{currentItem.level}</p>
                  </li>
                </ul>
              </div>
              <div className="tabs__element is-active">
                <div className="product__tabs-text">
                  <p>
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductContainer;
