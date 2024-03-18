import BackToTop from '../../components/BackToTop/BackToTop'
import Navbar from '../../components/Navbar/Navbar'
import Header from './components/Header/Header'
import LastCourses from './components/LastCourses/LastCourses'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LastCourses />
      <BackToTop />
    </>
  )
}
