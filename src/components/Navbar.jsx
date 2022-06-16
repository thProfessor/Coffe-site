import styles from "../styles/homepage.module.css";
import Logo from "../images/logo.png";

const Navbar = () => {
  const links = [
    {
      name: "About",
      link: "www.google.com",
    },
    {
      name: "Contact",
      link: "www.google.com",
    },
    {
      name: "About",
      link: "www.google.com",
    },
    {
      name: "About",
      link: "www.google.com",
    },
  ];
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} alt="starbucks" style={{ width: "50px" }} />
          <h3 className={styles.logoTitle}>StarBuckes</h3>
        </div>

        <div className={styles.links}>
          {links.map((link, index) => {
            return (
              <span key={index} className={styles.link}>
                {link.name}
              </span>
            );
          })}
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="search" className={styles.input} />
        </div>
      </div>
    </>
  );
};
export default Navbar;
