import BackToTop from '../../components/BackToTop/BackToTop'
import Navbar from '../../components/Navbar/Navbar'
import Header from './components/Header/Header'
import LastBooks from './components/LastBooks/LastBooks'
import LastCourses from './components/LastCourses/LastCourses'
import RoadMap from './components/RoadMap/RoadMap'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LastCourses />
      <LastBooks />
      <RoadMap />
      <BackToTop />
    </>
  )
}
