import { useState } from "react";
import familyLawImg from "../assets/family-law.png"
import bussinessLawImg from "../assets/business-law.png"
import criminalDefence from "../assets/criminal-defense.png"
import realStatLawImg from "../assets/real-state-law.png"
import personalInjuty from "../assets/personal-injury.png"
import immigrationLaw from "../assets/immigration-law.png"
import employeeLaw from "../assets/employee-law.png"
import intellectualLaw from "../assets/intellectual-law.png"

import {
  Home,
  Building2,
  Shield,
  Heart,
  Users,
  FileText,
  Gavel,
  Briefcase,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const ModernPracticeAreas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const practiceAreas = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Divorce, custody, adoption, and family matters with compassionate legal support",
      lawyerCount: 1250,
      color: "from-red-400 to-pink-500",
      bgColor: familyLawImg,
    },
    {
      icon: Building2,
      title: "Business Law",
      description: "Corporate formation, contracts, and business disputes for growing companies",
      lawyerCount: 980,
      color: "from-blue-400 to-cyan-500",
      bgColor: bussinessLawImg,
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Expert criminal defense, DUI representation, and legal protection",
      lawyerCount: 850,
      color: "from-orange-400 to-red-500",
      bgColor: criminalDefence,
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Property transactions, disputes, and comprehensive real estate legal services",
      lawyerCount: 720,
      color: "from-green-400 to-emerald-500",
      bgColor: realStatLawImg,
    },
    {
      icon: Users,
      title: "Personal Injury",
      description: "Accident claims, medical malpractice, and maximum compensation recovery",
      lawyerCount: 650,
      color: "from-purple-400 to-violet-500",
      bgColor: personalInjuty,
    },
    {
      icon: FileText,
      title: "Immigration Law",
      description: "Visas, citizenship, deportation defense, and immigration solutions",
      lawyerCount: 580,
      color: "from-indigo-400 to-blue-500",
      bgColor: immigrationLaw,
    },
    {
      icon: Gavel,
      title: "Employment Law",
      description: "Workplace disputes, discrimination cases, and employee rights protection",
      lawyerCount: 480,
      color: "from-yellow-400 to-orange-500",
      bgColor: employeeLaw,
    },
    {
      icon: Briefcase,
      title: "Intellectual Property",
      description: "Patents, trademarks, copyrights, and comprehensive IP protection",
      lawyerCount: 380,
      color: "from-pink-400 to-purple-500",
      bgColor: intellectualLaw,
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 rounded-full px-6 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Most Searched Legal Areas</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Expert Legal Help
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Across Every Field
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect with specialized attorneys who understand your unique legal challenges.
            From family matters to complex business disputes.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={area.title}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`
      relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 
      transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between
      ${isHovered ? "transform scale-105 shadow-2xl" : "shadow-xl hover:shadow-2xl"}
    `}
                  style={{ height: "380px" }}
                >
                  {/* Background Gradient on Hover */}
                  <div
                    className={`
        absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 
        transition-all duration-500 rounded-3xl
      `}
                  />

                  {/* Icon */}
                  <div
                    className={`
    relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6
    group-hover:scale-110 transition-all duration-300
  `}
                    style={
                      area.bgColor.endsWith(".png") || area.bgColor.endsWith(".jpg")
                        ? { backgroundImage: `url(${area.bgColor})`, backgroundSize: "cover", backgroundPosition: "center" }
                        : {}
                    }
                  >
                    <div className={typeof area.bgColor === "string" && !area.bgColor.includes(".") ? area.bgColor : ""} />
                    <IconComponent
                      className={`w-8 h-8 bg-gradient-to-br ${area.color} text-transparent bg-clip-text`}
                    />
                    <IconComponent
                      className={`w-8 h-8 bg-gradient-to-br ${area.color} text-transparent bg-clip-text`}
                      style={{
                        filter: isHovered
                          ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
                          : "none",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                        {area.title}
                      </h3>

                      <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
                        {area.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${area.color} rounded-full animate-pulse`}
                          />
                          <span className="text-slate-500 text-sm font-medium">
                            {area.lawyerCount.toLocaleString()} lawyers
                          </span>
                        </div>
                        <div className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                          Available Now
                        </div>
                      </div>

                      <button
                        className={`
            w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-medium
            bg-gradient-to-r ${area.color} text-white opacity-0 group-hover:opacity-100 
            transform translate-y-2 group-hover:translate-y-0 transition-all duration-300
            hover:shadow-lg
          `}
                      >
                        Find {area.title} Lawyers
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Floating elements on hover */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse" />
                    </>
                  )}
                </div>
              </div>

            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Browse All Specialties
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/80 backdrop-blur-md border border-white/60 text-slate-700 hover:text-slate-900 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Need Help Choosing?
            </button>
          </div>

          <p className="text-slate-500 mt-6 text-sm">
            Can't find your legal issue? Contact us for personalized lawyer recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernPracticeAreas;