import CatalogItem from './main-catalog-item';

type CatalogItemsProps = {
  onHandleClick: () => void;
  onHandleItemHover: (id: number) => void;
  isPopUpShow: boolean;
}

function CatalogItems({ onHandleClick,onHandleItemHover,isPopUpShow }: CatalogItemsProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      <CatalogItem
        onHandleClick = {onHandleClick}
        onHandleItemHover = {onHandleItemHover}
        isPopUpShow = {isPopUpShow}
      />
    </div>
  );
}

export default CatalogItems;
