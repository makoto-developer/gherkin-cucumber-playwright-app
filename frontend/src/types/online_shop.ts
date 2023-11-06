export type Item = {
    id: string
    name: string
    price: Price // 税込
    inventory: number
}

export type Price = {
    price: number // 税込価格
    priceExcludeTax: number // 税抜価格
    taxRate: number // 適用税率
    tax: number // 消費税
}