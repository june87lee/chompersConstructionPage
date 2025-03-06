import * as React from "react"

interface Service {
  title: string
  description: string
}

interface ServicesProps {
  services: Service[]
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section className="bg-chompBlack py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-chompYellowLight mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-chompBlueDark p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-chompYellowLight mb-4">
                {service.title}
              </h3>
              <p className="text-chompWhite text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
