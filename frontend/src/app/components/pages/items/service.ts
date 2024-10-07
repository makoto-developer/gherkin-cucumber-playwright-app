import {Item} from "@/types/shop";
import {useCounterStore} from "@/provider/counter-store-provider";

const service = (): {
    items: Item[],
    count: number,
    incrementCount: VoidFunction,
    decrementCount: VoidFunction,
} => {
    const {count, incrementCount, decrementCount} =
        useCounterStore( )
    const items: Item[] = [
        {
            id: 1,
            name: 'みかん',
            url: '/mikan.svg',
            count: 0,
            description: '庭に落ちてたみかん',
        }, {
            id: 2,
            name: 'セロリ',
            url: '/celery.svg',
            count: 0,
            description: '畑で取れたセロリ',
        }
    ]
    return {
        items, count, incrementCount, decrementCount

    }
}

export default service