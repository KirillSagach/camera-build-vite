type paginationItemsProps = {
  count: number;
  onHandlePagClick: (i: number) => void;
  currentPage: number;
}

function PaginationItems({ count, onHandlePagClick, currentPage }: paginationItemsProps): JSX.Element {
  const pagItems = [];

  function isActivePageMarkup(pagPage: number, curPage: number) {
    if (pagPage === curPage) {
      return 'pagination__link--active';
    } else {
      return '';
    }
  }

  for (let i = 1; i <= count; i++) {
    const activeMarkup = isActivePageMarkup(i,currentPage);
    pagItems.push(
      <li className="pagination__item">
        <a
          className={`pagination__link pagination__link ${activeMarkup}`}
          onClick={() => onHandlePagClick(i)}
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
