import {UserAccountType} from '../../src/types/UserAccountType'
import { mockUpProduct } from './mockUpProduct'

export const mockUpUserData: UserAccountType = {
    username: 'John Doe',
    pendingCart: [
        {
            product: mockUpProduct[0],
            quantity: 1,
            additionalRequest: 'no veggies'
        },
        {
            product: mockUpProduct[0],
            quantity: 1,
            additionalRequest: 'no veggies'
        },
        {
            product: mockUpProduct[0],
            quantity: 1,
            additionalRequest: 'no veggies'
        },
    ],
    favoriteProduct: [],
}