import { useEffect, useState } from 'react';
import { useOrderForm } from '../../hooks/useOrderForm';
import { SummaryValues } from '../../typings/useSummaryValues';
import './styles.css'
import { convertToReal } from '../../utils/utils';

export const SummaryTotalizers = () => {
    const { productsList } = useOrderForm()
    const  [summaryValues, setSummaryValues] = useState<SummaryValues>({
        subtotal: '',
        discount: '',
        shipping: '',
        total: ''
    })

    function updatingSummaryTotalizers(){
        const subtotal = productsList.reduce((subtotalAmount, product) => {
            const productListPrice = parseFloat(product.listPrice);
            const productQuantity = product.quantity;
            return subtotalAmount + (productListPrice * productQuantity);
        }, 0);  

        const discount = productsList.reduce((discountAmount, product) => {
            const productPrice = parseFloat(product.price);
            const productQuantity = product.quantity;
            return discountAmount + (productPrice * productQuantity);
        }, 0); 
        
        const shipping = productsList.reduce((shippingAmount, product) => {
            if (product.shipping.selected == 'entrega' && product.shipping.delivery) {
                const shippingValue = parseFloat(product.shipping.delivery.value)
                shippingAmount += shippingValue
            } 
            return shippingAmount
        }, 0);


        setSummaryValues({
            subtotal: subtotal.toFixed(2),            
            discount: `-${discount.toFixed(2)}`,
            shipping: shipping.toFixed(2),
            total: (shipping + subtotal).toFixed(2)
        })
    }
    useEffect (() => {
        if (!productsList) return     
        updatingSummaryTotalizers()            
    },[productsList])

    return (
        <div className='summaryTotalizers'>
            <div className='summaryTotalizers__price--container'>
                <div className='summaryTotalizers__price--description content-flex flex-column'>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Subtotal</span>
                        <span className='summatyTotalizers__value'>{convertToReal(Number(summaryValues.subtotal))}</span>
                    </div>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Desconto</span>
                        <span className='summatyTotalizers__value--negative'>{convertToReal(Number(summaryValues.discount))}</span>
                    </div>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Entrega</span>
                        <span className='summatyTotalizers__value'>{convertToReal(Number(summaryValues.shipping))}</span>
                    </div>
                </div>
                <div className='summaryTotalizers__price--total content-flex flex-column'>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Total</span>
                        <span className='summatyTotalizers__total--value'>{convertToReal(Number(summaryValues.total))}</span>
                    </div>
                    <p className='summaryTotalizers__installments--row'>
                        em até 
                        <strong> 10x </strong>
                        de
                        <strong> {convertToReal(Number(summaryValues.total)/10)}</strong>
                    </p>
                </div>
            </div>
            <div className='summaryTotalizers__button--container content-flex justify-center'>

                <button className='summaryTotalizers__button'> Ir para o pagamento</button>
            </div>
        </div>
    )
}