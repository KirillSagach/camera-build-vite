import ReviewListItem from './product-review-list-item';

function ProductReviewList(): JSX.Element {
  return (
    <ul className="review-block__list">
      <ReviewListItem/>
    </ul>
  );
}

export default ProductReviewList;
