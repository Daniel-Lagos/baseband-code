import Styles from './navbar.module.css';

const Navbar = () => {
  return (<div className={Styles.navbar}>
    <div className={Styles.toolBar}>
      <h3 className={Styles.title}>BaseBand Code</h3>
      <h3 className={Styles.title}>Hola, Bienvenido Daniel</h3>
    </div>
  </div>);
};
export default Navbar;
