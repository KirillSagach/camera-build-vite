import AddPopUpReviewForm from './add-popup-review-form';

type addPopUpReviewProps = {
  onHandleClick: ()=> void;
}

function AddPopUpReview({onHandleClick}:addPopUpReviewProps): JSX.Element {

  return (
    <>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <AddPopUpReviewForm
          onHandleClick={onHandleClick}
        />
      </div>
    </>
  );
}

export default AddPopUpReview;
