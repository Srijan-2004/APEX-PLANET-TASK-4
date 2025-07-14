import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, CheckSquare, ShoppingBag } from "lucide-react"

export default function HomePage() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A professional multi-page portfolio website showcasing skills and projects with responsive design.",
      icon: User,
      href: "/portfolio",
      color: "bg-blue-500",
    },
    {
      title: "To-Do List App",
      description: "A note-taking and task management app with localStorage persistence for data storage.",
      icon: CheckSquare,
      href: "/todo",
      color: "bg-green-500",
    },
    {
      title: "Product Listing",
      description: "An interactive product page with filtering by categories and sorting by various criteria.",
      icon: ShoppingBag,
      href: "/products",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Full-Stack Web Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three comprehensive projects combining HTML, CSS, and JavaScript to demonstrate modern web development
            skills and interactive user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <Link href={project.href}>
                    <Button className="w-full group-hover:bg-gray-900 transition-colors duration-300">
                      View Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Features</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Portfolio Website</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Responsive multi-page design</li>
                  <li>• About, Projects & Contact sections</li>
                  <li>• Professional styling</li>
                  <li>• Smooth navigation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">To-Do List App</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Add, edit & delete tasks</li>
                  <li>• localStorage persistence</li>
                  <li>• Task completion tracking</li>
                  <li>• Clean, intuitive interface</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Product Listing</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Category filtering</li>
                  <li>• Price range filtering</li>
                  <li>• Multiple sorting options</li>
                  <li>• Interactive product cards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
