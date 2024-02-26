'use client'

import AboutSection from './components/AboutSection'
import Education from './components/Education'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MainNav from './components/MainNav'
import OtherRemarkableProjects from './components/OtherRemarkableProjects'
import ProjectSection from './components/ProjectSection'
import SocialMediaSection from './components/SocialMediaSection'
import Languages from './components/Languages'

export default function Home() {
  return (
    <main className='lg:mx-72 '>
      <MainNav />
      <div className='mx-3 lg:mx-6 py-16'>
        <HeroSection />
      </div>
      <div className='lg:hidden mx-3'>
        <SocialMediaSection />
      </div>
      <div className='hidden lg:block lg:mx-6'>
        <SocialMediaSection />
      </div>
      <div className='lg:mx-6 mx-3'>
        <AboutSection num='01' title='About Me' />
        <ExperienceSection num='02' title='Work Experience' />
        <ProjectSection num='03' title="Some Projects I've Built" />
        <OtherRemarkableProjects num='04' title='Other Remarkable Projects' />
        <Education num='05' title='Academic Background and Other Studies' />
        <Languages num='06' title='Languages' />
        <Footer />
      </div>
    </main>
  )
}
