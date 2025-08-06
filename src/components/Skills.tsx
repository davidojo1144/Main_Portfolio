import { useState } from 'react'
import { Smartphone, Globe, Server, Database, Cloud, Code } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('mobile')

  const skillCategories = {
    mobile: {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'Expo', level: 95 },
        { name: 'Nativewind', level: 90 },
        { name: 'XCTest', level: 65 }, 
        { name: 'Detox', level: 60 },
        { name: 'Flutter', level: 70 },
      ]
    },
    web: {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Context Api', level: 92 },
        { name: 'Redux', level: 92 },
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 65 },
        { name: 'GraphQL', level: 60 },
        { name: 'REST APIs', level: 95 },
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'Firebase', level: 95 },
        { name: 'Supabase', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Redis', level: 80 },
      ]
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Google Cloud', level: 88 },
        { name: 'AWS', level: 82 },
        { name: 'Appwrite', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set across the full development stack
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
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

export default Skills
