import React, { useCallback } from "react";
import service from "@/app/components/pages/items/service";
import Image from "next/image";
import {Item} from "@/types/shop";

const ItemsPage = () => {
    const {items, count, incrementCount, decrementCount} = service()
    const handleAddCart = useCallback(function(id: number) {

    },[])
    return <div>
        <h1>オンラインショップ 商品一覧</h1>
        <div>
            <table>
                <thead>
                <tr>
                    <th>item id</th>
                    <th>商品名</th>
                    <th>画像</th>
                    <th>個数</th>
                    <th>カートに入れる</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item: Item ) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <Image src={item.url}  alt={item.description} width={100} height={100}/>
                            </td>
                        <td><input value={count} type={'number'} />
                            <input type={'button'} onClick={() => incrementCount} value={'+'}/>
                            <input type={'button'} onClick={() => decrementCount} value={'-'}/>
                        </td>
                        <td><button onClick={() => handleAddCart(item.id)}>カートに入れる</button></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    </div>
}

export default ItemsPage;