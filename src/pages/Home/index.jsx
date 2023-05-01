import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import bs1 from '~/img/Home/bs1.jpg'
import bs2 from '~/img/Home/bs2.jpg'
import bs3 from '~/img/Home/bs3.jpg'
import images from '~/img/Home/backgroundImg.jpg'
import BestsellerCart from '~/components/BestsellerCart';

function Home() {
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
                         <BestsellerCart
                              img={bs1}
                              name='VINTAGE FRAME EYEGLASSES'
                         ></BestsellerCart>
                         <BestsellerCart
                              img={bs2}
                              name='BAG'
                         ></BestsellerCart>
                         <BestsellerCart
                              img={bs3}
                              name='MIDI PLEATED SKIRT'
                         ></BestsellerCart>
                    </div>
               </div>
          </div>

     );
}

export default Home;