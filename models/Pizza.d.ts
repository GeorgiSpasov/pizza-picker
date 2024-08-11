export type Pizza = {
  id: number;
  name: string;
  price: number;
  imgSrc: {
    left: ImageSourcePropType; 
    right: ImageSourcePropType;
  };
};