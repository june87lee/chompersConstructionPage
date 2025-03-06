import * as React from "react"

interface ContactProps {
  title: string
  subtitle: string
  email: string
}

const Contact: React.FC<ContactProps> = ({ title, subtitle, email }) => {
  return (
    <section className="bg-chompBlack py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-chompYellowLight mb-6">
          {title}
        </h2>
        <p className="text-xl text-chompWhite mb-8">{subtitle}</p>
        <a
          href={`mailto:${email}`}
          className="text-chompYellowDark hover:text-chompYellowLight transition-colors text-2xl"
        >
          {email}
        </a>
        <p className="text-chompWhite mt-4">LIC#1026504</p>
      </div>
    </section>
  )
}

export default Contact
