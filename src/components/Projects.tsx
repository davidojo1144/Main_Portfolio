import { useState } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Server } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'Full-featured mobile app with real-time inventory, payment integration, and user authentication.',
      image: '/placeholder.svg?height=300&width=400',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Web App',
      description: 'Collaborative task management platform with real-time updates and team collaboration features.',
      image: '/placeholder.svg?height=300&width=400',
      category: 'web',
      technologies: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Restaurant API Backend',
      description: 'Scalable REST API for restaurant management with order processing and inventory tracking.',
      image: '/placeholder.svg?height=300&width=400',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Mobile App',
      description: 'Instagram-like social media app with photo sharing, stories, and real-time messaging.',
      image: '/placeholder.svg?height=300&width=400',
      category: 'mobile',
      technologies: ['React Native', 'Appwrite', 'Socket.io', 'Expo'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      image: '/placeholder.svg?height=300&width=400',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'Chart.js'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Scalable microservices backend with Docker containerization and API gateway.',
      image: '/placeholder.svg?height=300&width=400',
      category: 'backend',
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis'],
      github: '#',
      demo: '#',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects', icon: null },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'backend', label: 'Backend', icon: Server },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work across mobile, web, and backend development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {filter.icon && <filter.icon className="w-5 h-5" />}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-purple-500/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-purple-600 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
