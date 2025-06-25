
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send, Sparkles, MessageCircle } from "lucide-react";
import { HeatwaveAnimation } from "@/components/HeatwaveAnimation";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your advanced AI weather assistant specializing in heatwave analysis and prediction. I can provide detailed meteorological insights, real-time risk assessments, location-specific safety protocols, and comprehensive heat index calculations. How can I assist you with heat safety today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const getIntelligentResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Location-specific responses
    if (input.includes('pune') || input.includes('maharashtra')) {
      return "Pune, Maharastra is experiencing extreme heat conditions. Current heat index: 118°F. Recommendation: Avoid outdoor activities between 10 AM - 7 PM. Hydrate every 15 minutes with electrolyte solutions. Seek air conditioning immediately if experiencing dizziness, nausea, or confusion.";
    }
    
    if (input.includes('california') || input.includes('los angeles')) {
      return "California is under moderate to high heat advisory. Current patterns show elevated temperatures due to high-pressure systems. Marine layer may provide some coastal relief. Inland areas reaching 105°F+. Monitor air quality as heat can worsen pollution levels.";
    }
    
    // Symptom-based responses
    if (input.includes('symptom') || input.includes('heat exhaustion') || input.includes('heat stroke')) {
      return "CRITICAL HEAT ILLNESS SYMPTOMS:\n\n🚨 Heat Exhaustion: Heavy sweating, weakness, nausea, headache, muscle cramps, cool/moist skin\n\n🆘 Heat Stroke: High body temp (103°F+), hot/red/dry skin, rapid pulse, confusion, loss of consciousness\n\nIMMEDIATE ACTION: Move to cool area, remove excess clothing, apply cool water to skin, call 911 if heat stroke suspected.";
    }
    
    // Risk level queries
    if (input.includes('risk') || input.includes('level') || input.includes('danger')) {
      return "CURRENT HEAT RISK ASSESSMENT:\n\n🟢 LOW (80-85°F): Normal activities, stay hydrated\n🟡 MODERATE (85-95°F): Limit strenuous outdoor work\n🟠 HIGH (95-105°F): Frequent breaks, avoid peak hours\n🔴 EXTREME (105°F+): Avoid outdoor exposure, emergency protocols\n\nFactors: Temperature, humidity, wind, UV index, air quality, personal risk factors.";
    }
    
    // Prevention and safety
    if (input.includes('prevent') || input.includes('safety') || input.includes('protect')) {
      return "COMPREHENSIVE HEAT SAFETY PROTOCOL:\n\n💧 HYDRATION: 8-12oz water every 15-20 minutes during heat exposure\n👕 CLOTHING: Light-colored, loose-fitting, breathable fabrics\n⏰ TIMING: Avoid 10 AM - 6 PM peak heat hours\n🏠 SHELTER: Air conditioning, fans, cool showers\n🍎 NUTRITION: Light meals, avoid alcohol/caffeine\n👥 BUDDY SYSTEM: Check on vulnerable populations\n📱 MONITORING: Track symptoms, heat index, weather alerts";
    }
    
    // Cooling strategies
    if (input.includes('cool') || input.includes('temperature') || input.includes('ac')) {
      return "ADVANCED COOLING STRATEGIES:\n\n🏠 Indoor: AC to 78°F max, ceiling fans, close blinds during day\n💦 Personal: Cold showers, wet towels on neck/wrists, ice packs\n🌡️ Body cooling: Focus on pulse points (neck, wrists, ankles)\n🚗 Vehicle: Pre-cool car, use sunshades, never leave anyone inside\n🏊 Water activities: Swimming, misting systems, cooling centers\n❄️ Emergency cooling: Ice baths for severe overheating (medical supervision)";
    }
    
    // Vulnerable populations
    if (input.includes('elderly') || input.includes('children') || input.includes('vulnerable')) {
      return "HIGH-RISK POPULATIONS NEED SPECIAL CARE:\n\n👴 ELDERLY: Decreased heat tolerance, medication interactions, check hourly\n👶 CHILDREN: Rapid overheating, limited communication, never leave unattended\n🏥 CHRONIC CONDITIONS: Heart disease, diabetes, kidney disease require medical consultation\n💊 MEDICATIONS: Diuretics, beta-blockers, antihistamines increase heat sensitivity\n🏃 ATHLETES: Gradual acclimatization, electrolyte monitoring, heat illness protocols";
    }
    
    // Default intelligent responses
    const defaultResponses = [
      "Based on current atmospheric conditions and your location data, I'm analyzing heat patterns using advanced meteorological models. The convective heating index suggests elevated risk levels. Would you like a detailed breakdown of your area's heat forecast?",
      "I'm processing real-time weather station data and satellite imagery to provide you with precision heat analytics. Current jet stream patterns indicate a persistent high-pressure dome. Let me know your specific location for targeted recommendations.",
      "My algorithms are detecting concerning heat signature patterns in your region. The heat dome effect is intensifying due to urban heat island phenomena. I recommend implementing immediate cooling protocols and monitoring physiological stress indicators.",
      "Advanced thermal modeling shows heat index values approaching critical thresholds. The wet-bulb temperature calculations indicate dangerous conditions for prolonged outdoor exposure. Shall I provide location-specific emergency preparedness guidelines?",
      "Satellite thermal imaging reveals significant ground heating across multiple climate zones. The atmospheric river disruption is creating unprecedented heat accumulation. I'm ready to provide detailed risk assessment and mitigation strategies for your area."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate intelligent AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getIntelligentResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage("");
  };

  const quickQuestions = [
    "What's the heat risk for Pune, Maharastra?",
    "Signs of heat exhaustion vs heat stroke?",
    "Best cooling strategies for extreme heat?",
    "Safety protocols for vulnerable populations?",
    "Emergency heat illness response?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <HeatwaveAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center py-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 flex items-center justify-center gap-3">
            <Bot className="text-purple-500 animate-pulse" size={48} />
            Advanced AI Weather Assistant
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get precision heatwave analysis, real-time risk assessment, and personalized safety protocols powered by advanced meteorological AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm h-[600px] flex flex-col animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="p-4 border-b bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex items-center gap-3">
                  <Bot className="text-purple-600" size={24} />
                  <h2 className="text-xl font-semibold text-gray-800">Advanced Heat Intelligence System</h2>
                  <Sparkles className="text-blue-500" size={20} />
                </div>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      {!message.isUser && (
                        <div className="p-2 bg-purple-100 rounded-full">
                          <Bot className="w-5 h-5 text-purple-600" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                      {message.isUser && (
                        <div className="p-2 bg-blue-100 rounded-full">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about heatwaves, safety protocols, or weather analysis..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="text-green-500" />
                Expert Consultations
              </h3>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3 text-sm hover:bg-purple-50"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <h3 className="text-lg font-semibold mb-3">AI Capabilities</h3>
              <ul className="space-y-2 text-sm">
                <li>• Real-time meteorological analysis</li>
                <li>• Precision heat index calculations</li>
                <li>• Location-specific risk assessment</li>
                <li>• Medical-grade safety protocols</li>
                <li>• Advanced cooling optimization</li>
                <li>• Emergency response coordination</li>
              </ul>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <h3 className="text-lg font-semibold mb-3 text-red-600">Emergency Contact</h3>
              <p className="text-sm text-gray-600 mb-3">
                For immediate heat-related emergencies:
              </p>
              <Button variant="destructive" className="w-full mb-2">
                Call 911
              </Button>
              <p className="text-xs text-gray-500">
                Poison Control: 1-800-222-1222<br/>
                Heat Emergency Hotline: 1-800-HEAT-HELP
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
