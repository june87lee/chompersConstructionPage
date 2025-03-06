import * as React from "react"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Seo from "../components/Seo"

const IndexPage: React.FC = () => {
  const services = [
    {
      title: "Decks & Fences",
      description:
        "Custom decks and fences to enhance your outdoor space. Trust Chomper's Construction, Sacramento's top contractors, for quality craftsmanship.",
    },
    {
      title: "Kitchens & Cabinets",
      description:
        "Beautiful and functional kitchen designs by Chomper's Construction, the leading renovation experts in Sacramento, CA.",
    },
    {
      title: "Bathrooms",
      description:
        "Modern and luxurious bathroom remodels by Chomper's Construction. Serving Sacramento homeowners for over 30 years.",
    },
    {
      title: "Flooring",
      description:
        "High-quality flooring solutions for every room. Chomper's Construction is Sacramento's trusted contractor for home renovations.",
    },
    {
      title: "Remodeling",
      description:
        "Transform your home with our remodeling expertise. Chomper's Construction specializes in home remodels in Sacramento, CA.",
    },
    {
      title: "And Much More!",
      description:
        "Let Chomper’s chomp through your renovation list! From decks to kitchens, we’re Sacramento’s go-to contractors for home improvements.",
    },
  ]
  return (
    <>
      <Seo
        title="Home"
        description="Chomper's Construction is a family-owned construction company in Sacramento, CA, specializing in home remodels, renovations, decks, fences, kitchens, bathrooms, and more. Call us for a free estimate!"
      />
      <div className="min-h-screen bg-chompBlack text-chompWhite">
        {/* Header Section */}
        <header className="bg-chompBlack py-12 text-center">
          <div className="container mx-auto px-4">
            <img
              src="/logo_ver001.png"
              alt="Chomper's Construction Logo"
              className="w-64 md:w-80 mx-auto mb-6" // Increased logo size
            />
            <h1 className="text-5xl font-bold text-chompYellowLight mb-4">
              Chomper's Construction
            </h1>
            <p
              className="text-2xl text-chompWhite text-center"
              style={{ display: "inline" }} /*FIX: to center text*/
            >
              Chomp it, build it, love it!
            </p>
          </div>
        </header>

        {/* Services Section */}
        <Services services={services} />

        {/* Hero Section */}
        <Hero
          title="Building Dreams for 30 Years"
          subtitle="Family-owned and operated, we bring quality and care to every project."
          image1="/beforeSample.jpeg"
          image2="/afterSample.jpeg"
          phoneNumber="916.425.1825" // Optional: Pass the phone number
        />

        {/* Contact Section */}
        <Contact
          title="Contact Us"
          subtitle="For inquiries, please reach out to us at:"
          email="service@chompersconstruction.com"
        />

        {/* Footer Section */}
        <footer className="bg-chompYellowDark py-8 text-center">
          <p
            className="text-chompBlack text-center"
            style={{ display: "inline" }} /*FIX: to center text*/
          >
            &copy; {new Date().getFullYear()} Chomper's Construction. All rights
            reserved.
          </p>
          <div>
            <p
              className="text-chompBlack mt-2 text-center"
              style={{ display: "inline-block" }} /*FIX: to center text*/
            >
              LIC#1026504
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default IndexPage
