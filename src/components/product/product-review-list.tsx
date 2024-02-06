import ReviewListItem from './product-review-list-item';

type productReviewProps = {
  reviewsCount: number;
}

function ProductReviewList({ reviewsCount }: productReviewProps): JSX.Element {
  return (
    <ul className="review-block__list">
      <ReviewListItem
        reviewsCount={reviewsCount}
      />
    </ul>
  );
}

export default ProductReviewList;
