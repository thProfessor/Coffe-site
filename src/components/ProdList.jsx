import Logo from "../images/logo.png";
import styles from "../styles/homepage.module.css";
const ProdList = () => {
  return (
    <div className={styles.prodList}>
      <img src={Logo} style={{ width: "50px" }} alt="" />
      <div className="prodListDetail">
        <h3>Sippy Cups</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
    </div>
  );
};
export default ProdList;
