import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Sharperly',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Lead development of mobile and web applications using React Native, React, and Node.js. Implemented scalable backend solutions with Appwrite and Firebase.',
      achievements: [
        'Increased app performance by 40% through optimization',
        'Led a team of 2 developers on major product releases',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React Native', 'React', 'TypeScript', 'Node.js', 'Appwrite', 'MongoDb', 'Google Cloud']
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      company: 'BellFast',
      location: 'Lagos, Nigeria + Remote',
      period: '2025 - present',
      description: 'Developed cross-platform mobile applications and RESTful APIs. Collaborated with design team to create intuitive user experiences.',
      achievements: [
        'Built 3 successful mobile apps with 100K+ downloads',
        'Reduced API response time by 50% through optimization',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 3,
      title: 'Software Engineering',
      company: 'Semicolon-Africa',
      location: 'Lagos, Nigeria',
      period: '2024 - 2025',
      description: 'Focused on backend development, API design and Frontend development. Built scalable microservices architecture and implemented real-time features.',
      achievements: [
        'Designed and implemented Alot RESTful APIs',
        'Grow as a Frontend developer, built scalable web and mobile applications',
        'Integrated multiple third-party services and payment gateways'
      ],
      technologies: ['Java', 'Python', 'JavaScript', 'PostgreSQL', 'AWS', 'Docker']
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row gap-8 group"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-900 group-hover:bg-blue-500 transition-colors duration-300"></div>

                  {/* Content */}
                  <div className="md:ml-20 flex-1">
                    <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-400 mb-2">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-purple-400 font-medium">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
