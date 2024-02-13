import AddPopUpReviewForm from './add-popup-review-form';

function AddPopUpReview(): JSX.Element {

  return (
    <>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <AddPopUpReviewForm/>
      </div>
    </>
  );
}

export default AddPopUpReview;
