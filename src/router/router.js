import Home from "../pages/Home/Home"
import AboutUs from "../pages/AboutUs/AboutUs"
import ContactUs from "../pages/ContactUs/ContactUs"
import NotFound from "../pages/NotFound/NotFound"
import Questions from "../pages/Questions/Questions"
import Privacy from "../pages/Privacy/Privacy"
import Blogs from "../pages/Blogs/Blogs"
import Login from "../pages/Login/Login"
import Books from "../pages/Books/Books"

const router = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/questions', element: <Questions /> },
    { path: '/privacy', element: <Privacy /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/login', element: <Login /> },
    { path: '/books', element: <Books /> },
    { path: '*', element: <NotFound /> },
]

export default router