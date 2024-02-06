import { useAppSelector } from '../hooks';
import PaginationItems from './main-pagination-items';

type paginationProps = {
  onHandlePagClick: (i : number) => void;
}

function Pagination({onHandlePagClick}:paginationProps): JSX.Element {

  const currentItems = useAppSelector((state)=> state.catalogItems);
  const pages = currentItems.length / 9;
  const ceilPages = Math.floor(pages);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <PaginationItems
          count={ceilPages}
          onHandlePagClick={onHandlePagClick}
        />
      </ul>
    </div>
  );
}

export default Pagination;
