import { useState } from 'react';
import ProductReviewList from './product-review-list';
import ProductReviewBtn from './product-review-btn';
import { useAppSelector } from '../hooks';
import { PopUpType } from '../../types/common-type';

type productReviewProps = {
  onHandleClick: (showPopUp: boolean, popType: PopUpType)=> void;
}

function ProductReview({onHandleClick}:productReviewProps): JSX.Element {

  const [reviewsCount, setReviewsCount] = useState(3);

  const addReviews = () => {
    setReviewsCount(reviewsCount + 3);
  };

  const reviewsForItem = useAppSelector((state)=> state.currentItemReviews);
  const reviewsForItemCount = reviewsForItem.length;
  const isBtnNeeded = reviewsForItemCount > reviewsCount;

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button"
            onClick={() => onHandleClick(true,PopUpType.Review)}
          >
            Оставить свой отзыв
          </button>
        </div>
        <ProductReviewList
          reviewsCount={reviewsCount}
        />
        <ProductReviewBtn
          onReviewBtnHandle={addReviews}
          isBtnNeeded = {isBtnNeeded}
        />
      </div>
    </section>
  );
}

export default ProductReview;
