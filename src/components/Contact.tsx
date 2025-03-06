import * as React from "react"

interface ContactProps {
  title: string
  subtitle: string
  email: string
}

const Contact: React.FC<ContactProps> = ({ title, subtitle, email }) => {
  return (
    <section className="bg-chompYellowDark py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-chompBlack mb-6">{title}</h2>
        <p
          className="text-xl text-chompBlack mb-8"
          style={{ display: "inline" }} /*FIX: to center text*/
        >
          {subtitle}
        </p>
        <div>
          <a
            href={`mailto:${email}`}
            className="text-chompBlueDark hover:text-chompBlueLight transition-colors text-2xl"
          >
            {email}
          </a>
        </div>
        <p
          className="text-chompBlack mt-4"
          style={{ display: "inline" }} /*FIX: to center text*/
        >
          LIC#1026504
        </p>
      </div>
    </section>
  )
}

export default Contact
