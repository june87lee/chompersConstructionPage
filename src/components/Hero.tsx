import * as React from "react"

interface HeroProps {
  title: string
  subtitle: string
  image1: string
  image2: string
  phoneNumber?: string // Optional phone number prop
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image1,
  image2,
  phoneNumber,
}) => {
  return (
    <section className="bg-chompBlack py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-chompYellowLight mb-6">
          {title}
        </h2>
        <p
          className="text-xl text-chompWhite mb-8 text-center"
          style={{ display: "inline" }} /*FIX: to center text*/
        >
          {subtitle}
        </p>
        {phoneNumber && (
          <div>
            {/*FIX: to center text*/}
            <a
              href={`tel:${phoneNumber}`}
              className="inline-block bg-chompYellowDark text-chompBlack font-bold py-3 px-8 rounded-full hover:bg-chompYellowLight transition-colors mb-8"
            >
              Call for a Free Estimate: {phoneNumber}
            </a>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 content-center">
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
