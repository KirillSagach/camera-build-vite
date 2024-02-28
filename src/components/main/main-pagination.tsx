import { useAppSelector } from '../hooks';
import PaginationItems from './main-pagination-items';

type paginationProps = {
  onHandlePagClick: (i : number) => void;
  currentPage: number;
}

function Pagination({onHandlePagClick, currentPage}:paginationProps): JSX.Element {

  const currentItems = useAppSelector(({catalogReducer})=> catalogReducer.catalogItems);
  const pages = currentItems.length / 9;
  const ceilPages = Math.floor(pages);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <PaginationItems
          count={ceilPages}
          onHandlePagClick={onHandlePagClick}
          currentPage={currentPage}
        />
      </ul>
    </div>
  );
}

export default Pagination;
