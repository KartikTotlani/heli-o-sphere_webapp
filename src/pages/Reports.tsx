
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  Thermometer, 
  Calendar, 
  MapPin,
  Download,
  Eye,
  BarChart3,
  Activity
} from "lucide-react";
import { HeatwaveAnimation } from "@/components/HeatwaveAnimation";

const Reports = () => {
  const [location, setLocation] = useState("Phoenix, AZ");
  const [reportData, setReportData] = useState({
    currentTemp: 108,
    maxTemp: 115,
    heatIndex: 118,
    riskLevel: "extreme" as const,
    forecast: [
      { day: "Today", temp: 108, risk: "extreme" },
      { day: "Tomorrow", temp: 112, risk: "extreme" },
      { day: "Day 3", temp: 109, risk: "extreme" },
      { day: "Day 4", temp: 106, risk: "high" },
      { day: "Day 5", temp: 103, risk: "high" },
      { day: "Day 6", temp: 98, risk: "moderate" },
      { day: "Day 7", temp: 95, risk: "moderate" }
    ]
  });

  // Get location from localStorage if available (from dashboard)
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-green-600 bg-green-100";
      case "moderate": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-orange-600 bg-orange-100";
      case "extreme": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const generatePDFReport = () => {
    // Simulate PDF generation
    const reportContent = `
HEATWAVE ANALYSIS REPORT
Location: ${location}
Generated: ${new Date().toLocaleString()}

CURRENT CONDITIONS:
- Temperature: ${reportData.currentTemp}°F
- Heat Index: ${reportData.heatIndex}°F
- Risk Level: ${reportData.riskLevel.toUpperCase()}

7-DAY FORECAST:
${reportData.forecast.map(day => `${day.day}: ${day.temp}°F (${day.risk})`).join('\n')}

RECOMMENDATIONS:
- Avoid outdoor activities during peak hours (10 AM - 6 PM)
- Stay hydrated with 8-12oz water every 15-20 minutes
- Seek air conditioning and cooling centers
- Monitor vulnerable populations hourly
    `;
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `heatwave-report-${location.replace(/,/g, '')}-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-red-50 relative overflow-hidden">
      <HeatwaveAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-6">
        <div className="text-center py-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 flex items-center justify-center gap-3">
            <FileText className="text-red-500" size={48} />
            Heatwave Predictor Full Report
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Comprehensive analysis and detailed forecasting for {location}
          </p>
        </div>

        {/* Report Header */}
        <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-500" size={24} />
              <div>
                <h2 className="text-2xl font-bold">{location}</h2>
                <p className="text-gray-600">Report generated: {new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={generatePDFReport} className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 w-4 h-4" />
                Download Report
              </Button>
              <Button variant="outline">
                <Eye className="mr-2 w-4 h-4" />
                Share Report
              </Button>
            </div>
          </div>
        </Card>

        {/* Current Status Overview */}
        <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Card className="bg-white/90 backdrop-blur-sm p-6 text-center">
            <Thermometer className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Current Temp</h3>
            <p className="text-3xl font-bold text-red-600">{reportData.currentTemp}°F</p>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm p-6 text-center">
            <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Heat Index</h3>
            <p className="text-3xl font-bold text-orange-600">{reportData.heatIndex}°F</p>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Risk Level</h3>
            <Badge className={`text-lg px-4 py-2 ${getRiskColor(reportData.riskLevel)}`}>
              {reportData.riskLevel.toUpperCase()}
            </Badge>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Max Today</h3>
            <p className="text-3xl font-bold text-blue-600">{reportData.maxTemp}°F</p>
          </Card>
        </div>

        {/* Detailed Analysis Tabs */}
        <div className="animate-fade-in" style={{animationDelay: '0.9s'}}>
          <Tabs defaultValue="forecast" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="forecast">7-Day Forecast</TabsTrigger>
              <TabsTrigger value="analysis">Risk Analysis</TabsTrigger>
              <TabsTrigger value="recommendations">Safety Protocols</TabsTrigger>
              <TabsTrigger value="historical">Historical Data</TabsTrigger>
            </TabsList>
            
            <TabsContent value="forecast" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="text-blue-500" />
                  Extended Weather Forecast
                </h3>
                <div className="grid gap-4">
                  {reportData.forecast.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-16 text-center">
                          <p className="font-semibold">{day.day}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{day.temp}°F</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getRiskColor(day.risk)}>
                          {day.risk.toUpperCase()}
                        </Badge>
                        <Progress value={(day.temp / 120) * 100} className="w-32" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="text-orange-500" />
                  Comprehensive Risk Assessment
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Heat Stress Factors</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Air Temperature</span>
                          <span className="font-semibold text-red-600">Critical</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Humidity Level</span>
                          <span className="font-semibold text-orange-600">High</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Wind Speed</span>
                          <span className="font-semibold text-yellow-600">Low</span>
                        </li>
                        <li className="flex justify-between">
                          <span>UV Index</span>
                          <span className="font-semibold text-red-600">Extreme</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Population Risk Levels</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Elderly (65+)</span>
                            <span>95% High Risk</span>
                          </div>
                          <Progress value={95} className="h-2 bg-red-100" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Children (0-12)</span>
                            <span>88% High Risk</span>
                          </div>
                          <Progress value={88} className="h-2 bg-orange-100" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Outdoor Workers</span>
                            <span>92% High Risk</span>
                          </div>
                          <Progress value={92} className="h-2 bg-red-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Medical Risk Assessment</h4>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800">
                        <strong>EXTREME CAUTION ADVISED:</strong> Current conditions present severe health risks. 
                        Heat-related illness probability exceeds 85% for prolonged outdoor exposure. 
                        Immediate cooling measures and hydration protocols are essential.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Safety Protocols</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">🚨 IMMEDIATE ACTIONS</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Activate emergency cooling protocols</li>
                      <li>• Cancel non-essential outdoor activities</li>
                      <li>• Open cooling centers to public</li>
                      <li>• Issue health advisories to media</li>
                      <li>• Increase emergency services staffing</li>
                      <li>• Monitor vulnerable populations hourly</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">🏠 PERSONAL PROTECTION</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Stay indoors with air conditioning</li>
                      <li>• Hydrate: 8-12oz water every 15 minutes</li>
                      <li>• Wear light, loose-fitting clothing</li>
                      <li>• Avoid alcohol, caffeine, and large meals</li>
                      <li>• Use cooling towels on neck and wrists</li>
                      <li>• Never leave anyone in vehicles</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">👥 COMMUNITY RESPONSE</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Check on elderly neighbors</li>
                      <li>• Provide pets with shade and water</li>
                      <li>• Limit outdoor work to early morning</li>
                      <li>• Share cooling resources</li>
                      <li>• Report heat emergencies immediately</li>
                      <li>• Support local cooling initiatives</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-3">🏥 MEDICAL GUIDANCE</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Watch for heat exhaustion signs</li>
                      <li>• Call 911 for confusion or high fever</li>
                      <li>• Pre-position medical supplies</li>
                      <li>• Review medication heat interactions</li>
                      <li>• Prepare cooling treatment areas</li>
                      <li>• Train staff on heat illness protocols</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="historical" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Historical Heat Pattern Analysis</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Temperature Trends (Last 30 Days)</h4>
                    <div className="bg-gradient-to-r from-yellow-100 to-red-100 p-4 rounded-lg">
                      <p>Average daily high: 106°F (+8°F above normal)</p>
                      <p>Record high this month: 118°F</p>
                      <p>Days above 105°F: 22 out of 30</p>
                      <p>Heat advisory days: 18</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Comparative Analysis</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-gray-100 p-3 rounded">
                        <p className="text-2xl font-bold">2023</p>
                        <p className="text-sm">105°F avg</p>
                      </div>
                      <div className="bg-yellow-100 p-3 rounded">
                        <p className="text-2xl font-bold">2024</p>
                        <p className="text-sm">108°F avg</p>
                      </div>
                      <div className="bg-red-100 p-3 rounded">
                        <p className="text-2xl font-bold text-red-600">Current</p>
                        <p className="text-sm">114°F avg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Reports;
