import Head from 'next/head'
import { About } from '../components/about/About'
import { Header } from '../components/header/Header'
import { Hero } from '../components/hero/Hero'

export default function Home() {
  return (
    <>
    <Head>
      <title>Satyaranjan Rout | Developer</title>
    </Head>
    <div className='contain'>
      <Header/>
      <Hero/>
      <About/>
    </div>
    </>
  )
}
