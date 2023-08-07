import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';

import { Routes, Route } from 'react-router-dom';


export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    )
}

export { Routes };
