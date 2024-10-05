export type Item = {
    id: number // item id
    name: string // item name
    url: string // image url path
    count: number //  number of orders
    description: string // explanation of the contents
}
const service = (): {
    items: Item[],
} => {
    const items: Item[] = [
        {
            id: 1,
            name: 'みかん',
            url: '/mikan.svg',
            count: 0,
            description: 'じいちゃん庭に落ちてたみかん',
        }, {
            id: 2,
            name: 'セロリ',
            url: '/celery.svg',
            count: 0,
            description: '千葉の畑で取れたセロリ',
        }
    ]
    return {
        items
    }
}

export default service