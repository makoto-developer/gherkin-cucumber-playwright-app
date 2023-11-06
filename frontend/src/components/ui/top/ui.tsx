import service from './service'

const ui = () => {
    const {itemList} = service()

    return <div>
        <h1>Top page</h1>
        <div>
            <ul>{itemList.map(item => `商品名:${item.name} 税込価格:${item.price.price} 在庫数:${item.inventory}`)}</ul>
        </div>
    </div>
}

export default ui