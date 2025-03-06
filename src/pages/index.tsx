import * as React from "react"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Seo from "../components/Seo"

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Chomper's Construction"
        description="Family-owned construction company with 30 years of experience."
      />
      <div className="min-h-screen bg-chompBlack text-chompWhite">
        {/* Header Section */}
        <header className="bg-chompBlueDark py-12 text-center">
          <div className="container mx-auto px-4">
            <img
              src="/logo_ver001.png"
              alt="Chomper's Construction Logo"
              className="w-48 mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-chompYellowLight mb-4">
              Chomper's Construction
            </h1>
            <p className="text-2xl text-chompWhite">
              Chomp it, build it, love it!
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <Hero
          title="Building Dreams for 30 Years"
          subtitle="Family-owned and operated, we bring quality and care to every project."
          image1="https://source.unsplash.com/800x600/?construction,house"
          image2="https://source.unsplash.com/800x600/?building,home"
        />

        {/* Contact Section */}
        <Contact
          title="Contact Us"
          subtitle="For inquiries, please reach out to us at:"
          email="service@chompersconstruction.com"
        />

        {/* Footer Section */}
        <footer className="bg-chompBlueDark py-8 text-center">
          <p className="text-chompWhite">
            &copy; {new Date().getFullYear()} Chomper's Construction. All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default IndexPage
