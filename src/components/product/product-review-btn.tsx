type productReviewBtnProps = {
  onReviewBtnHandle: () => void;
  isBtnNeeded: boolean;
}

function ProductReviewBtn({ onReviewBtnHandle, isBtnNeeded }: productReviewBtnProps): JSX.Element {
  return (
    isBtnNeeded ? (
      <div className="review-block__buttons">
        <button className="btn btn--purple" type="button"
          onClick={() => {
            onReviewBtnHandle();
          }}
        >
          Показать больше отзывов
        </button>
      </div>
    ) :
      <>
      </>
  );
}

export default ProductReviewBtn;
