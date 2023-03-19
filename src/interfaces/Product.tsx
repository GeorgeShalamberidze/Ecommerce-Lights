export default interface IProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  reviewCount: number;
  imgUrl: string;
  images: [{ imgUrl: string }];
}
