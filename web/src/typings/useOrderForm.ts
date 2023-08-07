import React from "react"

export interface useOrderForm {
    productsList: ProductsList[]
    setProductsList: React.Dispatch<React.SetStateAction<ProductsList[]>>
}
export interface OrderFormProviderProps {
    children: React.ReactNode;
}
export type InfoData= {
    orderForm: {
        id: string,
        items: ProductsList[],
    }
}

export type ProductsList =  {
    id: number,
    image: string,
    name: string,
    listPrice: string,
    price: string,
    quantity: number,
    shipping: {
      delivery: {
        days: string,
        value: string,
      },
      pickup: boolean,
      selected: string,
    },
}