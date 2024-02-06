type paginationItemsProps = {
  count: number;
  onHandlePagClick: (i : number) => void;
}

function PaginationItems({ count, onHandlePagClick }: paginationItemsProps): JSX.Element {
  const pagItems = [];

  for (let i = 1; i <= count; i++) {
    pagItems.push(
      <li className="pagination__item">
        <a
          className="pagination__link pagination__link"
          onClick={()=> onHandlePagClick(i)}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <> {pagItems} </>
  );
}

export default PaginationItems;
