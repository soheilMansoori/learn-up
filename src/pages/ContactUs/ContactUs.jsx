import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import SideMenu from './components/SideMenu/SideMenu';
import ContactForm from './components/ContactForm/ContactForm';
import BackToTop from '../../components/BackToTop/BackToTop';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='با ما در ارتباط باشید' pageName='تماس با ما' />
            <section className='bg-light'>
                <div className="container">
                    <div className="row">
                        <ContactForm />
                        <SideMenu />
                    </div>
                </div>
            </section>
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
