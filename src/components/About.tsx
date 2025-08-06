import { Code, Smartphone, Server, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: 'Web Apps Completed', value: '20+' },
    { icon: Smartphone, label: 'Mobile Apps', value: '5+' },
    { icon: Server, label: 'Backend APIs', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: 'Alot' },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with expertise in mobile, web, and backend development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a versatile developer with a passion for creating innovative digital solutions. 
                With extensive experience in mobile app development, web applications, and backend systems, 
                I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans across modern technologies including React, React Native, Node.js, 
                and cloud platforms like Firebase, Supabase, and Appwrite. I focus on creating 
                user-centric applications that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['React', 'React Native', 'Node.js', 'TypeScript', 'JavaScript', 'Next js', 'Appwrite', 'Git', 'Firebase', 'Supabase', 'Google Cloud', 'E.t.c'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/50 text-center transform hover:scale-105 transition-all duration-300 hover:border-purple-500/50"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
