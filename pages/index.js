import Head from 'next/head'
import Info from '../components/info/info';
import Title from "../components/tittle/title";
import Graphic from "../components/graphic/graphic";


export default function Home() {
  return (<>
          <Head>
              <title>Baseband Code</title>
              <Title/>
              <Info/>
              <Graphic/>
          </Head>

      </>
  )
}
