import { useAppSelector } from '../hooks';
import ItemRating from '../item-rating/item-rating';
import { sortReviews } from '../utils/utils-for-item';
import { formatData } from '../utils/utils-for-reviews';
type reviewListItemProps = {
  reviewsCount: number;
}

function ReviewListItem({ reviewsCount }: reviewListItemProps): JSX.Element {

  const reviews = useAppSelector(({itemReducer}) => itemReducer.currentItemReviews);
  const sortedReviews = sortReviews(reviews);
  const sliceReview = sortedReviews.slice(0, reviewsCount);

  return (
    <>
      {
        sliceReview.map((review) => (
          <li key={review.id} className="review-card">
            <div className="review-card__head">
              <p className="title title--h4">{review.userName}</p>
              <time className="review-card__data" dateTime={formatData(review.createAt, 'YYYY-MM-DD')}>
                {formatData(review.createAt, 'DD MMMM')}
              </time>
            </div>
            <div className="rate review-card__rate">
              <ItemRating
                rating={review.rating}
              />
              <p className="visually-hidden">Оценка: {review.rating}</p>
            </div>
            <ul className="review-card__list">
              <li className="item-list">
                <span className="item-list__title">Достоинства:</span>
                <p className="item-list__text">
                  {review.advantage}
                </p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Недостатки:</span>
                <p className="item-list__text">
                  {review.disadvantage}
                </p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Комментарий:</span>
                <p className="item-list__text">
                  {review.review}
                </p>
              </li>
            </ul>
          </li>
        ))
      }
    </>

  );
}

export default ReviewListItem;
