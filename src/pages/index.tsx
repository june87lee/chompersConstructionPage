import * as React from "react"

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-black bg-opacity-50 rounded-lg shadow-2xl text-center animate-fade-in">
        <img
          src="/logo_ver001.png" // Place your logo in the static folder
          alt="Chompers Construction Logo"
          className="w-36 h-36 mx-auto mb-8 rounded-full shadow-lg"
        />
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">
          Under Construction
        </h1>
        <p className="text-xl text-white mb-8">
          We're working hard to bring you an amazing experience. Stay tuned!
        </p>
        <div className="text-lg text-white">
          <p>For inquiries, please contact:</p>
          <p>
            <a
              href="mailto:service@chompersconstruction.com"
              className="text-yellow-400 hover:text-white transition-colors"
            >
              service@chompersconstruction.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
