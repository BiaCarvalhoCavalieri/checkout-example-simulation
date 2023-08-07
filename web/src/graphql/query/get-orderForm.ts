import { gql } from "@apollo/client"

export const GET__ORDERFORM = gql`
    query orderForm($input: OrderFormInput!) {
        orderForm(input: $input) {
            id
            items{
                id
                image
                name
                listPrice
                price
                shipping {
                    delivery {
                        days
                        value
                    }
                    pickup
                }
            }
        }
    }

`;
