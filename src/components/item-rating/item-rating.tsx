
type itemRatingProps = {
  rating: number;
}

function ItemRating({ rating }: itemRatingProps): JSX.Element {

  const ratingItems = [];


  function createMarkup(currentItem: number) {

    if (currentItem <= rating) {
      return (
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
      );
    } else {
      return (
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-star" />
        </svg>
      );
    }
  }

  for (let i = 1; i <= 5; i++) {
    const currentMarkup = createMarkup(i);
    ratingItems.push(currentMarkup);
  }

  return (
    <> {ratingItems} </>
  );
}

export default ItemRating;
