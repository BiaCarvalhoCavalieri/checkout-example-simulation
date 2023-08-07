import { SetStateAction } from 'react'
import { ProductsList } from './useOrderForm'

export type ShippingType = {
    type: string,
    title: string,
    info: string,
    price: number, 
    index: number
}
export type ShippingProps = {
    item: ShippingType,
    currentShipping: string,
    handleShippingChange: (newShipping: string, id: number) => void
}