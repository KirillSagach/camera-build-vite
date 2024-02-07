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

  function createMarkup(pagPage: number, curPage: number) {
    const activeMarkup = isActivePageMarkup(pagPage, curPage);

    if ((pagPage - curPage) > 2) {
      return (
        <li key={pagPage} className="pagination__item">
          <a className="pagination__link pagination__link--text"
            onClick={() => onHandlePagClick(pagPage)}
          >Далее
          </a>
        </li>
      );
    } else if ((pagPage - curPage) < -2) {
      return (
        <li key={pagPage} className="pagination__item">
          <a className="pagination__link pagination__link--text"
            onClick={() => onHandlePagClick(pagPage)}
          >Назад
          </a>
        </li>
      );
    } else {
      return (
        <li key={pagPage} className="pagination__item">
          <a
            className={`pagination__link pagination__link ${activeMarkup}`}
            onClick={() => onHandlePagClick(pagPage)}
          >
            {pagPage}
          </a>
        </li>
      );
    }
  }

  function setMinPageNumber() {
    let minPage = currentPage - 4;
    if (minPage <= 0) {
      minPage = 1;
    }

    return minPage;
  }

  function setMaxPageNumber() {
    let maxPage = currentPage + 4;
    if (maxPage >= count) {
      maxPage = count;
    }

    return maxPage;
  }

  const minPage = setMinPageNumber();
  const maxPage = setMaxPageNumber();

  for (let i = minPage; i <= maxPage; i++) {
    const currentMarkup = createMarkup(i, currentPage);
    pagItems.push(currentMarkup);
  }

  return (
    <> {pagItems} </>
  );
}

export default PaginationItems;
