import Link from "next/link";


const TopPage = () => {
    return <div>
        <h1>オンラインショップ トップページ</h1>
        <div>買い物はこちらから → <Link href={"/items"}>商品一覧</Link></div>
    </div>
}

export default TopPage;