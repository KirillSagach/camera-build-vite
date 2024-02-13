export enum Type {
  'Коллекционная',
  'Моментальная',
  'Цифровая',
  'Плёночная'
}

export enum Category {
  'Видеокамера',
  'Фотоаппарат'
}

export enum Level {
  'Нулевой',
  'Любительский',
  'Профессиональный'
}

export type CatalogItemType = {
  id: number;
  name: string;
  vendorCode: string;
  type: Type;
  category: Category;
  description: string;
  level: Level;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export enum PopUpType {
  Item = 'item',
  Review = 'review',
  Success = 'success'
}


