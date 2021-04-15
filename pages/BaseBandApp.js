import Styles from '../styles/baseband.module.css';
import Title from '../components/tittle/title';
import Info from '../components/info/info';
import Graphic from '../components/graphic/graphic';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

const BaseBandApp = () => {
  return (<div className={Styles.container}>
    <Navbar/>
    <main className={Styles.main}>
      <Title/>
      <Info/>
      <Graphic/>

    </main>
    <Footer/>
  </div>);
};

export default BaseBandApp;
