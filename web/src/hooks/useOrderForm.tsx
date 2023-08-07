import {useContext} from 'react';
import { OrderFormContext } from '../contexts/OrderForm';

export function useOrderForm() {
    const context = useContext(OrderFormContext)
    return context
}