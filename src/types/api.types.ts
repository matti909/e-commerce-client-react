
export interface Product_image {
  __typename: "UploadFile";
  url: string;
}

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  updated_at: string;
  image: string; 
  slug: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};
export type APIResponse = {
  data: {
    id: number;
    attributes: Record<string, any>;
  };
};