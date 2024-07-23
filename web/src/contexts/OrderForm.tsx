import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react'
import { GET__ORDERFORM } from '../graphql/query/get-orderForm';
import {
    InfoData,
    OrderFormProviderProps,
    ProductsList,
    useOrderForm
} from '../typings/useOrderForm';
import { mockupItems } from '../utils/utils';

export const OrderFormContext = React.createContext<useOrderForm>(
    {} as useOrderForm
)

export function OrderFormProvider({ children }: OrderFormProviderProps) {
    const [productsList, setProductsList] = useState<ProductsList[]>([] as ProductsList[])

    const { data, error } = useQuery<InfoData>(GET__ORDERFORM, {
        variables: {
            input: {
                orderFormId: 'c7eb7303-c53f-417d-8d51-cce67e5959e1'
            }
        }
    })
    function insertInitialProductQuantityAndShipping(products: ProductsList[]) {
        const productListWithInitialQuantityAndShipping = products.map((product: ProductsList) => {
            let typeShipping = "entrega"
            if (!product.shipping.delivery)
                typeShipping = "retirada"

            return {
                ...product, quantity: 1,
                shipping: { ...product.shipping, selected: typeShipping }
            }
        })
        setProductsList(productListWithInitialQuantityAndShipping)
    }

    useEffect(() => {
        if (!data) return
        const products: ProductsList[] = data.orderForm.items
        insertInitialProductQuantityAndShipping(products)

    }, [data && !productsList.length]);
    useEffect(() => {
        insertInitialProductQuantityAndShipping(mockupItems)
    }, [])
    if (error) {
        console.error(`Error! ${error}, the backend system breakdown, now this app uses mockup items`);
    }

    return (
        <OrderFormContext.Provider
            value={{
                productsList,
                setProductsList
            }}>
            {children}
        </OrderFormContext.Provider>
    )
}