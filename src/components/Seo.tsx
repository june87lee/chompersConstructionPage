import * as React from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
  title: string
  description?: string
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/logo_ver001.png" /> {/* Path to your favicon */}
    </Helmet>
  )
}

export default Seo
