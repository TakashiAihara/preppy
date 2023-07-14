export namespace YahooSearchResponse {
  export type ImageType = {
    small: string;
    medium: string;
  };

  export type ReviewType = {
    count: number;
    url: string;
    rate: number;
  };

  export type PriceLabelType = {
    taxable: true;
    defaultPrice: number;
    discountedPrice: null;
    fixedPrice: null;
    premiumPrice: null;
    periodStart: null;
    periodEnd: null;
  };

  export type PointType = {
    amount: number;
    times: number;
    bonusAmount: 3;
    bonusTimes: number;
    premiumAmount: number;
    premiumTimes: number;
    premiumBonusAmount: number;
    premiumBonusTimes: number;
  };

  export type ShippingType = {
    code: number;
    name: string;
  };

  export type GenreCategoryType = {
    id: number;
    name: string;
    depth: number;
  };

  export type ParentGenreCategoryType = {
    id: number;
    depth: number;
    name: string;
  };

  export type BrandType = {
    id: null;
    name: string;
  };

  export type SellerReviewType = {
    rate: number;
    count: number;
  };

  export type SellerType = {
    sellerId: string;
    name: string;
    url: string;
    isBestSeller: boolean;
    review: SellerReviewType;
    imageId: string;
  };

  export type DeliveryType = {
    deadLine: null;
    day: null;
    area: string;
  };

  export type RequestType = {
    query: string;
  };

  export type HitType = {
    index: number;
    name: string;
    description: string;
    headLine: string;
    url: string;
    inStock: boolean;
    code: string;
    condition: string;
    imageId: string;
    image: ImageType;
    review: ReviewType;
    affiliateRate: number;
    price: number;
    premiumPrice: number;
    premiumPriceStatus: boolean;
    premiumDiscountRate: null;
    premiumDiscountType: null;
    priceLabel: PriceLabelType;
    point: PointType;
    shipping: ShippingType;
    genreCategory: GenreCategoryType;
    parentGenreCategories: ParentGenreCategoryType[];
    brand: BrandType;
    parentBrands: [];
    janCode: string;
    payment: string;
    releaseDate: null;
    seller: SellerType;
    delivery: DeliveryType;
  };

  export type ResponseType = {
    totalResultsAvailable: number;
    totalResultsReturned: number;
    firstResultsPosition: number;
    request: RequestType;
    hits: HitType[];
  };
}
