import { useAppSelector } from '../hooks';

function ReviewListItem(): JSX.Element {

  const reviews = useAppSelector((state) => state.currentItemReviews);

  return (
    <>
      {
        reviews.map((review) => (
          <li key={review.id} className="review-card">
            <div className="review-card__head">
              <p className="title title--h4">{review.userName}</p>
              <time className="review-card__data" dateTime="2022-04-13">
                13 апреля
              </time>
            </div>
            <div className="rate review-card__rate">
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
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