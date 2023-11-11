import {Suspense} from "react";
import service from './service'
import {Item} from "@/types/online_shop";

const ui = () => {
    const {itemList} =  service()

    return <div>
        <h1>Top page</h1>
        <Suspense fallback={<div>Loading item list...</div>}>
            <div>
                <ul>{
                    itemList && (itemList as Item[]).map((item: Item) => {
                            return `商品名:${item.name} 税込価格:${item.price.price} 在庫数:${item.inventory}`
                        })
                }</ul>
            </div>
        </Suspense>
    </div>
}

export default ui