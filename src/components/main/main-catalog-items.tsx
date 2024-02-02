import CatalogItem from './main-catalog-item';

type CatalogItemsProps = {
  onHandleClick: () => void;
}

function CatalogItems({ onHandleClick }: CatalogItemsProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      <CatalogItem
        onHandleClick={onHandleClick}
      />
    </div>
  );
}

export default CatalogItems;
