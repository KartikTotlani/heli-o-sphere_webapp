
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Thermometer, Shield, Brain, Satellite, TrendingUp, ArrowRight, Play } from "lucide-react";
import { HeatwaveAnimation } from "@/components/HeatwaveAnimation";
import { DemoVideoModal } from "@/components/DemoVideoModal";

const Index = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models for accurate heatwave forecasting and risk assessment."
    },
    {
      icon: <Satellite className="w-8 h-8 text-green-500" />,
      title: "Real-time Monitoring",
      description: "Live data integration from meteorological stations and satellite imagery worldwide."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Smart Alerts",
      description: "Location-based notifications and personalized safety recommendations for your area."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/dbe58055-62ff-45a5-8d44-bd505c35f63e.png')`,
        }}
      />
      
      {/* Animated Background */}
      <HeatwaveAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-full">
                <img 
                  src="/lovable-uploads/5ab9af7e-cded-4c81-9849-ecb661810d4c.png" 
                  alt="Heli-O-Sphere Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Empowering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Communities
              </span><br />
              with Data-Driven<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Heatwave Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered heatwave monitoring and prediction system designed to protect communities 
              through real-time alerts and intelligent weather insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <DemoVideoModal>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </DemoVideoModal>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
                Real-time Monitoring
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
                AI-Powered Predictions
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
                Global Coverage
              </Badge>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines artificial intelligence, real-time data, and advanced analytics 
              to provide unparalleled heatwave protection and monitoring capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/20 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <Card className="bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-sm border-0 p-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Stay Protected?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who rely on Heli-O-Sphere for advanced heatwave monitoring 
              and real-time weather intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Start Monitoring Now
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/reports">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  View Full Reports
                  <Brain className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
