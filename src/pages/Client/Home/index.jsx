import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import bs1 from '~/img/Home/bs1.jpg'
import bs2 from '~/img/Home/bs2.jpg'
import bs3 from '~/img/Home/bs3.jpg'
import images from '~/img/Home/backgroundImg.jpg'
import BestsellerCart from '~/components/BestsellerCart';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
     const [bestsellerItems, setBestsellerItems] = useState([]);
     const handleFetchData = async () => {
          const response = await axios.get("http://localhost:3001/api/item/getAllItemBS");
          setBestsellerItems(response?.data);
     }
     useEffect(() => {
          handleFetchData();
     }, [])
     console.log(bestsellerItems);
     return (
          <div className={styles.wrapper}>
               <div className={styles.background}>
                    <img className={styles.backgroundImg} src={images} alt=''></img>
                    <div className={styles.backgroundText}>
                         <h1>FALL & WINTER</h1>
                         <button>
                              <Link className={styles.btnBgLink} to={'/'}>Shop Now</Link>
                         </button>
                    </div>
                    <div className={styles.backgroundFooter}>
                         <h4>FREE SHIPPING WORLWIDE</h4>
                    </div>
               </div>
               <div className={styles.bestseller}>
                    <h1 className={styles.bsTitle}>YEAR ROUND</h1>
                    <h3 className={styles.bsText}>Must Have Items</h3>
                    <div className={styles.listBS}>
                         {bestsellerItems.map((item, index) => {
                              return (
                                   <BestsellerCart
                                        key={index}
                                        img={bs2}
                                        name={item.name}
                                   ></BestsellerCart>
                              )
                         })}
                    </div>
               </div>
          </div>

     );
}

export default Home;