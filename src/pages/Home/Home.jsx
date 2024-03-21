import BackToTop from '../../components/BackToTop/BackToTop'
import Navbar from '../../components/Navbar/Navbar'
import Header from './components/Header/Header'
import LastBlogs from './components/LastBlogs/LastBlogs'
import LastBooks from './components/LastBooks/LastBooks'
import LastCourses from './components/LastCourses/LastCourses'
import NewsLetter from './components/NewsLetter/NewsLetter'
import PartnerBrands from './components/PartnerBrands/PartnerBrands'
import RoadMap from './components/RoadMap/RoadMap'
import StudentsComments from './components/StudentsComments/StudentsComments'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LastCourses />
      <LastBooks />
      <RoadMap />
      <StudentsComments />
      <LastBlogs />
      <PartnerBrands />
      <NewsLetter />
      <BackToTop />
    </>
  )
}
