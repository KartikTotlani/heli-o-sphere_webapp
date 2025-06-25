
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Brain, Satellite, Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models trained on legitimate meteorological data for accurate heatwave forecasting."
    },
    {
      icon: <Satellite className="w-6 h-6 text-green-500" />,
      title: "Real-time Data Integration",
      description: "Direct integration with IMD (India Meteorological Department) APIs for live weather monitoring."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Smart Alert System",
      description: "Intelligent notification system that alerts users based on their location and risk level."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "AI Weather Assistant",
      description: "Interactive chatbot providing personalized weather recommendations and safety guidelines."
    }
  ];

  const stats = [
    { label: "Data Sources", value: "15+", icon: <TrendingUp /> },
    { label: "Prediction Accuracy", value: "94%", icon: <Brain /> },
    { label: "Coverage Area", value: "Global", icon: <Satellite /> },
    { label: "Alert Response Time", value: "<30s", icon: <Shield /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center py-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 flex items-center justify-center gap-3">
            <Thermometer className="text-red-500" size={48} />
            About Heli-O-Sphere
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Advanced heatwave monitoring and prediction system designed to protect communities 
            through real-time alerts and AI-powered weather intelligence.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-white/80 backdrop-blur-sm p-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Heli-O-Sphere represents the next generation of weather monitoring technology, 
            combining cutting-edge machine learning with real-time meteorological data to 
            provide unparalleled heatwave prediction and protection. Our platform empowers 
            individuals and communities to make informed decisions during extreme weather events, 
            potentially saving lives and reducing heat-related health risks.
          </p>
        </Card>

        {/* Key Features */}
        <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${0.9 + index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="animate-fade-in" style={{animationDelay: '1.3s'}}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${1.6 + index * 0.1}s`}}>
                <div className="flex justify-center mb-3 text-orange-500">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="bg-white/80 backdrop-blur-sm p-8 animate-fade-in" style={{animationDelay: '2s'}}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Technology Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Machine Learning & AI</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">Neural Networks</Badge>
                <Badge variant="outline">Time Series Analysis</Badge>
                <Badge variant="outline">Predictive Modeling</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Data Sources</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">IMD APIs</Badge>
                <Badge variant="outline">Satellite Imagery</Badge>
                <Badge variant="outline">Weather Stations</Badge>
                <Badge variant="outline">Historical Climate Data</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Frontend Technology</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Power BI Integration</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 text-center animate-fade-in" style={{animationDelay: '2.3s'}}>
          <h2 className="text-3xl font-bold mb-4">Stay Protected with Heli-O-Sphere</h2>
          <p className="text-xl mb-6">
            Join thousands of users who rely on our advanced heatwave monitoring system 
            to stay safe during extreme weather conditions.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-white text-orange-600 px-4 py-2 text-lg">Real-time Alerts</Badge>
            <Badge className="bg-white text-orange-600 px-4 py-2 text-lg">AI Recommendations</Badge>
            <Badge className="bg-white text-orange-600 px-4 py-2 text-lg">Location-based</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
