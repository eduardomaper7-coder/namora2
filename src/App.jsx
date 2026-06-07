import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AllTreatments from './components/AllTreatments'
import Facilities from './components/Facilities'

import Equipo from './pages/Equipo'
import Legal from './pages/Legal'

const Home = () => (
  <>
    <div className="relative">
      <Navbar />
      <Hero />
    </div>

    <Treatments />
    <WhyUs />
    <Facilities />
    <FeaturedBox />
    <HowWeWork />
    <Testimonials />
    <BlogSection />
    <Location />
    <ContactSection />
    <Footer />
  </>
)

function App() {
  return (
    <main className="bg-white text-black">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tratamientos"
          element={
            <>
              <Navbar />
              <AllTreatments />
              <Footer />
            </>
          }
        />

        <Route
          path="/equipo"
          element={
            <>
              <Navbar />
              <Equipo />
              <Footer />
            </>
          }
        />

        <Route
          path="/legal"
          element={
            <>
              <Navbar />
              <Legal />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App