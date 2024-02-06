import CatalogItem from './main-catalog-item';

type CatalogItemsProps = {
  onHandleClick: () => void;
  onHandleItemHover: (id: number) => void;
}

function CatalogItems({ onHandleClick,onHandleItemHover }: CatalogItemsProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      <CatalogItem
        onHandleClick={onHandleClick}
        onHandleItemHover = {onHandleItemHover}
      />
    </div>
  );
}

export default CatalogItems;
