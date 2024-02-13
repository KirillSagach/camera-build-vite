import { useEffect, useRef } from 'react';
import AddPopUpItem from './add-popup-item';
import AddPopUpReview from './add-popup-review';
import { PopUpType } from '../../types/common-type';
import AddPopUpReviewSuccess from './add-popup-success';


type AddPopUp = {
  isPopupShow: boolean;
  onHandleClick: () => void;
  currentHoverItem: number;
  popupType: PopUpType;
}

function AddPopUp({ isPopupShow, onHandleClick, currentHoverItem, popupType }: AddPopUp): JSX.Element {

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


  function returnPopUpMarkup(popup: PopUpType) {

    switch (popup) {

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

  return (

    isPopupShow ? (
      <div className="modal is-active" >
        <div className="modal__wrapper">
          <div className="modal__overlay" />
          <div ref={modalRef} className="modal__content">
            {returnPopUpMarkup(popupType)}
          </div>
        </div>
      </div>
    ) :
      <>
      </>

  );
}

export default AddPopUp;
