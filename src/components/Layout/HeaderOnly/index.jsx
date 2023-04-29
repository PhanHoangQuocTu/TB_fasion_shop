import Footer from "../components/Footer";
import Header from "../components/Header";


function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default HeaderOnly;