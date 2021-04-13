import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Info from '../components/info/info';


export default function Home() {
  return (<>
          <Head>
              <title>Baseband Code</title>
              <Info/>
          </Head>

      </>
  )
}
