import React from "react";
import { Code, Palette, Brain, Shield, Zap, Cloud } from "lucide-react"; // icons

const Features = () => {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-red-600" />,
      title: "Backend Development",
      description:
        "Build scalable and secure server-side applications with modern frameworks and databases.",
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-600" />,
      title: "Frontend Development",
      description:
        "Create responsive, interactive, and visually appealing user interfaces for web and mobile apps.",
    },
    {
      icon: <Brain className="w-10 h-10 text-green-600" />,
      title: "AI & Machine Learning",
      description:
        "Harness AI to power predictive analytics, intelligent automation, and data-driven insights.",
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "Security First",
      description:
        "We implement strong authentication, encryption, and compliance for safe applications.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: "Fast Performance",
      description:
        "Optimized code and efficient architectures ensure speed and smooth experiences.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-pink-600" />,
      title: "Cloud Integration",
      description:
        "Seamlessly deploy and scale your apps on AWS, Azure, and other cloud platforms.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Our Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
