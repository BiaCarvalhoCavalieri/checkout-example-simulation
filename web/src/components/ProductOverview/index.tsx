import trashImage from '../../assets/trash.svg';
import { useState } from 'react';
import { Shipping } from '../Shipping';
import { useOrderForm } from '../../hooks/useOrderForm';
import { convertToReal } from '../../utils/utils';
import './styles.css';

export const ProductOverview = () => {
    const { productsList, setProductsList } = useOrderForm()

    function deleteProduct(id: number) {
        const updatedProductsList = productsList.filter(product => product.id !== id)
        setProductsList(updatedProductsList)
    }
    function handleQuantityChange(newQuantity: string, id: number) {
        const selectedQuantity = parseInt(newQuantity);
        const updatedProductsList = productsList.map((product) => 
            product.id === id ? { ...product, quantity: selectedQuantity } :  product
        )
        setProductsList(updatedProductsList)
    }
    function handleShippingChange(newShipping: string, id: number) { 
        const updatedProductsList = productsList.map((product) => (
            product.id === id ? {
                ...product, shipping: {
                    ...product.shipping, selected: newShipping
                }
            } : product
        ))
        setProductsList(updatedProductsList)
    }
    
     
    return (
        <div className="table__container">
            {productsList.map(({ id, image, name, listPrice, price, shipping, quantity }) => (
                <div className="table">
                    <div className="table__row">
                        <div className="table__column table__column--product table__column--header">
                            Produto
                        </div>
                        <div className="table__column table__column--price table__column--header">
                            Valor unitário
                        </div>
                        <div className="table__column table__column--quantity table__column--header">
                            Quantidade
                        </div>
                    </div>

                    <div className="table__row" key={id}>
                        <div className="table__column table__column--product table__column--body">
                            <div className="product__card">
                                <img src={image} alt={name} className="product__image" />
                                <div className="product__wrapper">
                                    <p className="product__title">{name}</p>
                                    <p className="product__info">Disponível em <span className="product__info--highlight">CD São Paulo</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="table__column table__column--price table__column--body">
                            <p className="product__oldPrice">
                                {convertToReal(Number(listPrice))}
                            </p>
                            <p className="product__currentPrice">
                                {convertToReal(Number(price))}
                            </p>
                        </div>
                        <div className="table__column table__column--quantity table__column--body">
                            <select 
                                className="product__quantity"
                                value={quantity} 
                                onChange={(newQuantity) => handleQuantityChange(newQuantity.target.value, id)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                            <button className="button__trash" onClick={() => deleteProduct(id)}>
                                <img src={trashImage} alt="excluir produto" />
                            </button>
                        </div>
                    </div>
                    <div className="table__row border_bottom">
                        <div className="table__column">
                            <button className="button button__outline">Adicionar Garantia Estendida</button>
                        </div>
                        <div className="table__column">
                            <button className="button button__more--options">Ver mais opções</button>
                        </div>
                    </div>
                    <div className="table__row border__bottom shipping__container align-end">
                        <div className="table__column table__column--full">
                            <h4 className='shipping__title'>Forma de Pagamento</h4>
                        </div>
                        {shipping.delivery &&
                            <div className="table__column">
                                <Shipping 
                                    item={{
                                        title: 'Entrega',
                                        type: 'entrega',
                                        price: shipping.delivery.value ? Number(shipping.delivery.value) : 0,
                                        info: shipping.delivery.days,
                                        index: id

                                    }} 
                                    currentShipping={shipping.selected}
                                    handleShippingChange={handleShippingChange}
                                />
                            </div>
                        }
                        {shipping.pickup && <div className="table__column" >
                            <Shipping 
                                item={{
                                    title: 'Retirada',
                                    type: 'retirada',
                                    price: 0,
                                    info: 'Disponível em estoque', 
                                    index: id
                                }}
                                currentShipping={shipping.selected}
                                handleShippingChange={handleShippingChange}
                            />
                        </div>
                        }
                    </div>
                    <div className="table__row">
                        <div className="table__column"><p className="total">Total</p></div>
                        <div className="table__column"><p className="total__price">{convertToReal(Number(price))}</p></div>
                    </div>
                </div>
            ))}
        </div>
    )
}