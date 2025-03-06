import * as React from "react"

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
        <h2 className="text-4xl font-bold text-chompYellowLight mb-6">
          {title}
        </h2>
        <p className="text-xl text-chompWhite mb-8">{subtitle}</p>
        <a
          href="tel:916-425-1825"
          className="inline-block bg-chompYellowDark text-chompBlack font-bold py-3 px-8 rounded-full hover:bg-chompYellowLight transition-colors mb-8"
        >
          Call for a Free Estimate: 916.425.1825
        </a>
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
