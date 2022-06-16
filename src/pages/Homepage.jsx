import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styles from "../styles/homepage.module.css";
const Homepage = () => {
  return (
    <>
      <div className={styles.homepageContainer}>
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
