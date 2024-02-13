import { useEffect, useRef } from 'react';
import AddPopUpItem from './add-popup-item';
import AddPopUpReview from './add-popup-review';

type AddPopUp = {
  isPopupShow: boolean;
  onHandleClick: () => void;
  currentHoverItem: number;
  isItemPopup: boolean;
}

function AddPopUp({ isPopupShow, onHandleClick, currentHoverItem, isItemPopup }: AddPopUp): JSX.Element {

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


  function returnPopUpMarkup(isItem: boolean) {

    switch (isItem) {

      case true:

        return (
          <AddPopUpItem
            currentHoverItem={currentHoverItem}
            onHandleClick={onHandleClick}
          />
        );

      case false:
        return (
          <AddPopUpReview />
        );
    }
  }

  return (

    isPopupShow ? (
      <div className="modal is-active" >
        <div className="modal__wrapper">
          <div className="modal__overlay" />
          <div ref={modalRef} className="modal__content">
            {returnPopUpMarkup(isItemPopup)}
          </div>
        </div>
      </div>
    ) :
      <>
      </>

  );
}

export default AddPopUp;
