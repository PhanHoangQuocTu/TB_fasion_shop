import Footer from "../components/Footer";
import Header from "../components/Header";


function MainLayout({ children }) {
    return (
        <div>
            <Header></Header>
                <div className="content">
                    {children}
                </div>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;