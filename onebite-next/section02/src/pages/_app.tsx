import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const onClickBtn = () => router.push("/test");

  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link className="mr-5" href="/">Index</Link>
        <Link className="mr-5" href="/search" prefetch={false}>Search</Link>
        <Link className="mr-5" href="/book/1">Book/1</Link>
        <div>
          <button onClick={onClickBtn}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
