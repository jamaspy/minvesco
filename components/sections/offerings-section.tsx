"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gem, Zap, Shield, TrendingUp, Globe, Users, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const offerings = [
  {
    icon: Gem,
    title: "Gold & Precious Metals",
    description: "Strategic investments in established gold mines across Western Australia and Northern Territory.",
    features: ["Proven reserves", "Experienced operators", "Stable returns"],
    minInvestment: "$250,000",
    expectedReturn: "18-25%",
    timeline: "3-5 years",
    color: "gold"
  },
  {
    icon: Zap,
    title: "Lithium & Battery Minerals",
    description: "Future-focused opportunities in lithium extraction and battery mineral development.",
    features: ["Growing demand", "EV market exposure", "Long-term potential"],
    minInvestment: "$500,000",
    expectedReturn: "25-35%",
    timeline: "5-7 years",
    color: "eucalyptus"
  },
  {
    icon: Shield,
    title: "Iron Ore & Base Metals",
    description: "Diversified portfolio in iron ore, copper, and zinc mining operations across Australia.",
    features: ["Market stability", "Infrastructure ready", "Established markets"],
    minInvestment: "$1,000,000",
    expectedReturn: "15-22%",
    timeline: "7-10 years",
    color: "outback-red"
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Superior Returns",
    description: "Our portfolio consistently outperforms market benchmarks with risk-adjusted returns."
  },
  {
    icon: Globe,
    title: "Geographic Diversification",
    description: "Strategic positioning across Australia's most prolific mining regions."
  },
  {
    icon: Users,
    title: "Expert Management",
    description: "Decades of combined experience in mining operations and investment management."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Comprehensive due diligence and ongoing monitoring of all investments."
  }
]

export default function OfferingsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section 
      id="offerings" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 h-32 w-32 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 bg-eucalyptus-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Investment <span className="text-gold-600">Opportunities</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover premium mining investments across Australia&apos;s most promising sectors. 
            Each opportunity is carefully vetted and managed by our expert team.
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    offering.color === 'gold' ? 'bg-gold-100 text-gold-600' :
                    offering.color === 'eucalyptus' ? 'bg-eucalyptus-100 text-eucalyptus-600' :
                    'bg-red-100 text-red-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <offering.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                    {offering.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {offering.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className={`h-2 w-2 rounded-full mr-3 ${
                          offering.color === 'gold' ? 'bg-gold-500' :
                          offering.color === 'eucalyptus' ? 'bg-eucalyptus-500' :
                          'bg-red-500'
                        }`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Min. Investment:</span>
                      <span className="font-semibold text-slate-900">{offering.minInvestment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Expected Return:</span>
                      <span className="font-semibold text-eucalyptus-600">{offering.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Timeline:</span>
                      <span className="font-semibold text-slate-900">{offering.timeline}</span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full mt-4 ${
                      offering.color === 'gold' ? 'bg-gold-500 hover:bg-gold-600' :
                      offering.color === 'eucalyptus' ? 'bg-eucalyptus-500 hover:bg-eucalyptus-600' :
                      'bg-red-500 hover:bg-red-600'
                    } text-white group-hover:scale-105 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-eucalyptus-600">MinVesco</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence and deep industry expertise sets us apart in the mining investment landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-eucalyptus-100 to-eucalyptus-200 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-eucalyptus-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}