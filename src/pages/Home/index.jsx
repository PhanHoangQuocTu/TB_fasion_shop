import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import images from '~/img/Home/backgroundImg.jpg'

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
               
          </div>

     );
}

export default Home;