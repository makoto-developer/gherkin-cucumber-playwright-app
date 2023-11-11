import {useGetItemList} from "@/hooks/item";

const service = () => {
    const {} = useGetItemList()
    console.log("itemList -> ", itemList)

    return {itemList}
}

export  default service