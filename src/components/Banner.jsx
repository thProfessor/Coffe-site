import Detail from "./Detail";
import ProdImg from "./ProdImg";
import styles from "../styles/homepage.module.css";
import ProdList from "./ProdList";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Detail />
      <ProdImg />
      <ProdList />
    </div>
  );
};
export default Banner;
