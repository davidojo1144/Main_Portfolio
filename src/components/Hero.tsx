import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download, Instagram } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Mobile App Developer',
    'Web App Developer',
    'Backend Developer',
    'Full Stack Developer'
  ]

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgo8ZyBmaWxsPSIjOUM5MkFDIiBmaWxsT3BhY2l0eT0iMC4xIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* <div className="mb-8 animate-fade-in-up">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Developer Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500/50 shadow-2xl animate-float"
            />
          </div> */}

          <h1 className="text-5xl md:text-7xl md:mt-10 font-bold mb-6 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hello, I am
            </span>
            <br />
            <span className="text-white">Ojo David Ayodeji</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 animate-fade-in-up delay-400">
            <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-600">
            "Driven by a passion for building innovative <strong>Mobile</strong> and <strong>Web</strong> applications, with strong expertise in developing scalable backend solutions. Proficient in Appwrite, Supabase, Firebase, and Google Cloud Platform."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up delay-800">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <p className="w-5 h-5" />
              Download Resume
            </button>
            <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-1000">
            <a
              href="https://github.com/davidojo1144"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://port-folio-xu1j.vercel.app"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/optimizedave?igsh=MTY5OGM0MHl1MDA0Nw=="
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero
