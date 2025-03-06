import * as React from "react"
import HouseAnimation from "./HouseAnimation"

interface HeroProps {
  title: string
  subtitle: string
  image1: string
  image2: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image1, image2 }) => {
  return (
    <section className="bg-chompBlueLight py-20">
      <div className="container mx-auto px-4 text-center">
        <HouseAnimation />
        <h2 className="text-4xl font-bold text-chompYellowLight mb-6">
          {title}
        </h2>
        <p className="text-xl text-chompWhite mb-8">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={image1}
            alt="Construction Site"
            className="rounded-lg shadow-2xl"
          />
          <img
            src={image2}
            alt="Finished Home"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
