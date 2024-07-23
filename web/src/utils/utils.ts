import { ProductsList } from "../typings/useOrderForm";

export function convertToReal(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export const mockupItems: ProductsList[] = [
    {
        id: 1,
        image: "https://i.imgur.com/q9JJUlb.png",
        name: "Iphone 11",
        listPrice: "999.00",
        price: "979.00",
        quantity: 1,
        shipping: {
            delivery: {
                days: "1 dia",
                value: "9.70"
            },
            pickup: true,
            selected: "entrega"
        }
    },
    {
        id: 2,
        image: "https://i.imgur.com/jUCR6P9.png",
        name: "Playstation 5",
        listPrice: "1999.00",
        price: "1859.00",
        quantity: 1,
        shipping: {
            delivery: {
                days: "5 dias",
                value: "19.00"
            },
            pickup: false,
            selected: "entrega"
        }
    },
    {
        id: 3,
        image: "https://i.imgur.com/O3uVmfc.png",
        name: "Samsung Galaxy",
        listPrice: "349.00",
        price: "329.00",
        quantity: 1,
        shipping: {
            delivery: {
                days: "14 dias",
                value: "1.50",
            },
            pickup: true,
            selected: "entrega"
        }
    },
    {
        id: 4,
        image: "https://i.imgur.com/Jc9jIFC.png",
        name: 'Televisão 55"',
        listPrice: "999.00",
        price: "914.00",
        quantity: 1,
        shipping: {
            pickup: true,
            selected: "entrega"
        }
    },
    {
        id: 5,
        image: "https://i.imgur.com/RExG7WA.png",
        name: "Ventilador",
        listPrice: "19.00",
        price: "17.99",
        quantity: 1,
        shipping: {
            delivery: {
                days: "7 dias",
                value: "2.90",
            },
            pickup: false,
            selected: "entrega"
        }
    },
    {
        id: 6,
        image: "https://i.imgur.com/EeZS5OD.png",
        name: "Xbox 360",
        listPrice: "199.00",
        price: "170.00",
        quantity: 1,
        shipping: {
            delivery: {
                days: "5 dias",
                value: "10.00"
            },
            pickup: true,
            selected: "entrega"
        }
    },
    {
        id: 7,
        image: "https://i.imgur.com/EeZS5OD.png",
        name: "Xbox X",
        listPrice: "2999.00",
        price: "2399.00",
        quantity: 1,
        shipping: {
            delivery: {
                days: "2 dias",
                value: "7.00"
            },
            pickup: false,
            selected: "entrega"
        }
    }
]