import './styles.css';
import { ShippingProps } from '../../typings/useShipping';
import { convertToReal } from '../../utils/utils';
 
export const Shipping = ({item, currentShipping, handleShippingChange}: ShippingProps) => {  
    return (  
        <div key={item.index} className={`shipping__wrapper ${currentShipping == item.type ? 'active': ''}`} onClick={() => handleShippingChange(item.type, item.index)}>
            <input type="radio" name={`shipping${item.index}`} id={`shipping${item.index}`} checked={currentShipping == item.type}/>
            <div className="shipping_description">
                <p className="shipping__description--title">{item.title}</p>
                <p className="shipping__description--info">{item.info}</p>   
            </div>
            <p className="shipping__price">{item.price ? `+ ${convertToReal(item.price)}` : 'Grátis'}</p>                     
        </div>               
    )
}