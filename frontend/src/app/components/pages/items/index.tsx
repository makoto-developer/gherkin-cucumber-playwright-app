import React from "react";
import service, {Item} from "@/app/components/pages/items/service";
import Image from "next/image";
import Link from "next/link";

const ItemsPage = () => {
    const {items} = service()
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
                        <td><input value={0} type={'number'} /></td>
                        <td><button type={'button'}>カートに入れる</button></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    </div>
}

export default ItemsPage;