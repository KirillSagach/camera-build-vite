import { useEffect, useRef } from 'react';
import { useAppSelector } from '../hooks';
import { findItemForPopUp } from '../utils/utils-for-item';

type AddItemPopupProps = {
  isPopupShow: boolean;
  onHandleClick: () => void;
  currentHoverItem: number;
}

function AddItemPopUp({ isPopupShow, onHandleClick, currentHoverItem}: AddItemPopupProps): JSX.Element {

  const catalogItems = useAppSelector((state)=> state.catalogItems);
  const currentHoverItemData = findItemForPopUp(currentHoverItem, catalogItems);

  const modalRef = useRef(null);

  useEffect(() => {

    const closeModalOnClick = (evt: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(evt.target)) {
        onHandleClick();
      }
    };

    document.body.addEventListener('mousedown', closeModalOnClick);

    return () => {
      document.body.removeEventListener('mousedown', closeModalOnClick);
    };
  }, [isPopupShow, onHandleClick]);

  useEffect(() => {

    const closeModalOnEscKey = (evt: KeyboardEvent) => {
      if (isPopupShow && evt.code === 'Escape') {
        onHandleClick();
      }
    };

    document.body.addEventListener('keydown', closeModalOnEscKey);

    return () => {
      document.body.removeEventListener('keydown', closeModalOnEscKey);
    };
  }, [isPopupShow, onHandleClick]);

  return (

    isPopupShow ? (
      <div className="modal is-active" >
        <div className="modal__wrapper">
          <div className="modal__overlay" />
          <div ref={modalRef} className="modal__content">
            <p className="title title--h4">Добавить товар в корзину</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${currentHoverItemData.previewImgWebp}, ${currentHoverItemData.previewImgWebp2x} 2x`}
                  />
                  <img
                    src={currentHoverItemData.previewImg}
                    srcSet={`${currentHoverItemData.previewImg2x} 2x`}
                    width={140}
                    height={120}
                    alt={currentHoverItemData.name}
                  />
                </picture>
              </div>
              <div className="basket-item__description">
                <p className="basket-item__title">{currentHoverItemData.name}</p>
                <ul className="basket-item__list">
                  <li className="basket-item__list-item">
                    <span className="basket-item__article">Артикул:</span>{' '}
                    <span className="basket-item__number">{currentHoverItemData.vendorCode}</span>
                  </li>
                  <li className="basket-item__list-item">{`${currentHoverItemData.type} фотокамера`}</li>
                  <li className="basket-item__list-item">{`${currentHoverItemData.level} уровень`}</li>
                </ul>
                <p className="basket-item__price">
                  <span className="visually-hidden">Цена:</span>{`${currentHoverItemData.price} ₽`}
                </p>
              </div>
            </div>
            <div className="modal__buttons">
              <button
                className="btn btn--purple modal__btn modal__btn--fit-width"
                type="button"
              >
                <svg width={24} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-add-basket" />
                </svg>
                Добавить в корзину
              </button>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап"
              onClick={onHandleClick}
            >
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ) :
      <>
      </>

  );
}

export default AddItemPopUp;
