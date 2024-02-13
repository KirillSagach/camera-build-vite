import { useEffect, useRef } from 'react';
import AddPopUpItem from './add-popup-item';
import AddPopUpReview from './add-popup-review';
import { PopUpType } from '../../types/common-type';
import AddPopUpReviewSuccess from './add-popup-success';


type AddPopUp = {
  isPopupShow: boolean;
  onHandleClick: (showPopUp: boolean, popType: PopUpType) => void;
  currentHoverItem: number;
  popUpType: PopUpType;
}

function AddPopUp({ isPopupShow, onHandleClick, currentHoverItem, popUpType }: AddPopUp): JSX.Element {

  const modalRef = useRef(null);

  useEffect(() => {

    const closeModalOnClick = (evt: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(evt.target)) {
        onHandleClick(false, PopUpType.None);
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
        onHandleClick(false, PopUpType.None);
      }
    };

    document.body.addEventListener('keydown', closeModalOnEscKey);

    return () => {
      document.body.removeEventListener('keydown', closeModalOnEscKey);
    };
  }, [isPopupShow, onHandleClick]);


  function returnPopUpMarkup(popType: PopUpType) {

    switch (popType) {

      case PopUpType.Item:

        return (
          <AddPopUpItem
            currentHoverItem={currentHoverItem}
            onHandleClick={onHandleClick}
          />
        );

      case PopUpType.Review:
        return (
          <AddPopUpReview
            onHandleClick={onHandleClick}
          />
        );

      case PopUpType.Success:
        return (
          <AddPopUpReviewSuccess
            onHandleClick={onHandleClick}
          />
        );
    }
  }

  function getMarkupByPopType(popType: PopUpType) {

    switch (popType) {
      case PopUpType.Success:
        return (
          'modal--narrow'
        );
      default: return ('');
    }

  }

  return (

    isPopupShow ? (
      <div className={`modal is-active ${getMarkupByPopType(popUpType)}`} >
        <div className="modal__wrapper">
          <div className="modal__overlay" />
          <div ref={modalRef} className="modal__content">
            {returnPopUpMarkup(popUpType)}
          </div>
        </div>
      </div>
    ) :
      <>
      </>

  );
}

export default AddPopUp;
