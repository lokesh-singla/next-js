import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <nav>
      <ul className="menu-bar"> </ul>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
      <h1>HELLO TO MY PAGE</h1>
    </>
  )
}
