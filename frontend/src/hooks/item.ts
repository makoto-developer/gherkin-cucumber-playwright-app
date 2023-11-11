import {cache, useState} from "react";

export const useGetItemList = cache(async () => {
    const [data, setData] = useState({
        data: null,
        error: null,
        loading: false,
    });

    // FIXME ポート番号を環境変数から取得する
    const run = async () => {

        const response = await fetch('http://localhost:48800/api/item')

        // FIXME エラーの設計はあとで考える
        if (!response.ok) {
            throw new Error("cause to error when use item list")
        }
        return response.body
    }

    console.log('response:', run)
    return {...data, run}
})

