import Home from "../pages/Home/Home"
import AboutUs from "../pages/AboutUs/AboutUs"
import ContactUs from "../pages/ContactUs/ContactUs"
import NotFound from "../pages/NotFound/NotFound"
import Questions from "../pages/Questions/Questions"
import Privacy from "../pages/Privacy/Privacy"
import Blogs from "../pages/Blogs/Blogs"
import Login from "../pages/Login/Login"
import Books from "../pages/Books/Books"
import Courses from "../pages/Courses/Courses"
import BlogDetails from "../pages/BlogDetails/BlogDetails"
import CourseDetails from "../pages/CourseDetails/CourseDetails"
import BookDetails from "../pages/BookDetails/BookDetails"
import UserBasket from "../pages/UserBasket/UserBasket"

const router = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/questions', element: <Questions /> },
    { path: '/privacy', element: <Privacy /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blog-details/:id', element: <BlogDetails /> },
    { path: '/login', element: <Login /> },
    { path: '/books', element: <Books /> },
    { path: '/book-details/:id', element: <BookDetails /> },
    { path: '/courses', element: <Courses /> },
    { path: '/course-details/:id', element: <CourseDetails /> },
    { path: '/user-basket', element: <UserBasket /> },
    { path: '*', element: <NotFound /> },
]

export default router