import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>オンラインショップ トップページ</h1>
    <div><Link href={"/"}>買い物はこちらから</Link></div>

    </div>
  );
}
