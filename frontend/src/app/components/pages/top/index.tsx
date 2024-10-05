import Link from "next/link";


const TopPage = () => {
    return <div>
        <h1>オンラインショップ トップページ</h1>
        <div><Link href={"/items"}>買い物はこちらから</Link></div>
    </div>
}

export default TopPage;