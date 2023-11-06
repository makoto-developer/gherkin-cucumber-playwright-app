import {Item} from "@/types/online_shop";

const service = () => {
    const itemList: Item[] = [
        {
            id: '1',
            name: "apple",
            price: {
                price: 108,
                priceExcludeTax: 100,
                taxRate: 0.8,
                tax: 80,
            },
            inventory: 1124,
        }, {
            id: '2',
            name: "banana",
            price: {
                price: 160,
                priceExcludeTax: 148,
                taxRate: 0.8,
                tax: 12,
            },
            inventory: 234,
        }
    ]
    return {
        itemList
    }
}

export  default service