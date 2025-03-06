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

        {/* Services Section */}
        <section className="bg-chompBlueLight py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-chompYellowLight mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-chompBlueDark p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                  Decks & Fences
                </h3>
                <p className="text-chompWhite">
                  Custom decks and fences to enhance your outdoor space.
                </p>
              </div>
              <div className="bg-chompBlueDark p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                  Kitchens & Cabinets
                </h3>
                <p className="text-chompWhite">
                  Beautiful and functional kitchen designs.
                </p>
              </div>
              <div className="bg-chompBlueDark p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                  Bathrooms
                </h3>
                <p className="text-chompWhite">
                  Modern and luxurious bathroom remodels.
                </p>
              </div>
              <div className="bg-chompBlueDark p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                  Flooring
                </h3>
                <p className="text-chompWhite">
                  High-quality flooring solutions for every room.
                </p>
              </div>
              <div className="bg-chompBlueDark p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                  Remodeling
                </h3>
                <p className="text-chompWhite">
                  Transform your home with our remodeling expertise.
                </p>
              </div>
              <div className="bg-chompBlueDark p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                  And Much More!
                </h3>
                <p className="text-chompWhite">
                  Let Chomper’s chomp through your renovation list!
                </p>
              </div>
            </div>
          </div>
        </section>

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
          <p className="text-chompWhite mt-2">LIC#1026504</p>
        </footer>
      </div>
    </>
  )
}

export default IndexPage
