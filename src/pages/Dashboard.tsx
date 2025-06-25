import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Thermometer, AlertTriangle, MapPin, Clock, Navigation, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LocationPermission } from "@/components/LocationPermission";
import { PowerBIDashboard } from "@/components/PowerBIDashboard";
import { HeatwaveAnimation } from "@/components/HeatwaveAnimation";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [location, setLocation] = useState("Phoenix, AZ");
  const [currentTemp, setCurrentTemp] = useState(108);
  const [heatIndex, setHeatIndex] = useState(115);
  const [alertLevel, setAlertLevel] = useState<"low" | "moderate" | "high" | "extreme">("high");
  const [userLocation, setUserLocation] = useState<{lat: number, lon: number} | null>(null);
  const [locationPermission, setLocationPermission] = useState<"pending" | "granted" | "denied">("pending");
  const { toast } = useToast();

  const getAlertColor = (level: string) => {
    switch (level) {
      case "low": return "bg-green-500";
      case "moderate": return "bg-yellow-500";
      case "high": return "bg-orange-500";
      case "extreme": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getAlertVariant = (level: string) => {
    switch (level) {
      case "extreme":
      case "high": return "destructive" as const;
      default: return "default" as const;
    }
  };

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
    // Save location to localStorage so Reports page can access it
    localStorage.setItem('userLocation', newLocation);
  };

  const handleLocationAccess = async (granted: boolean) => {
    if (granted) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        setLocationPermission("granted");
        
        const newLocation = `${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`;
        setLocation(newLocation);
        localStorage.setItem('userLocation', newLocation);
        
        toast({
          title: "Location Access Granted",
          description: "Dashboard updated with your current location data.",
        });
      } catch (error) {
        console.error("Error getting location:", error);
        setLocationPermission("denied");
        toast({
          title: "Location Error",
          description: "Could not access your location. Using default location.",
          variant: "destructive",
        });
      }
    } else {
      setLocationPermission("denied");
      toast({
        title: "Location Access Denied",
        description: "Using default location for weather data.",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemp(prev => prev + (Math.random() - 0.5) * 2);
      setHeatIndex(prev => prev + (Math.random() - 0.5) * 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Load saved location on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 relative overflow-hidden">
      <HeatwaveAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto p-4 space-y-6">
        <div className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 flex items-center justify-center gap-3">
            <Thermometer className="text-red-500 animate-pulse" size={40} />
            Live Dashboard
          </h1>
          <p className="text-gray-700 text-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
            Real-time heatwave monitoring for {location}
          </p>
          <div className="mt-4">
            <Link to="/reports">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <FileText className="mr-2 w-4 h-4" />
                View Full Report
              </Button>
            </Link>
          </div>
        </div>

        {locationPermission === "pending" && (
          <div className="animate-scale-in">
            <LocationPermission onPermissionChange={handleLocationAccess} />
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-blue-500" />
            <Label htmlFor="location" className="text-lg font-semibold">Location</Label>
            {userLocation && <Badge variant="outline" className="text-green-600">GPS Located</Badge>}
          </div>
          <Input
            id="location"
            value={location}
            onChange={(e) => handleLocationChange(e.target.value)}
            placeholder="Enter your location"
            className="text-lg"
          />
        </div>

        <Alert variant={getAlertVariant(alertLevel)} className="border-2 animate-fade-in bg-white/90 backdrop-blur-sm" style={{animationDelay: '0.9s'}}>
          <AlertTriangle className="h-6 w-6 animate-pulse" />
          <AlertTitle className="text-xl">Heat Alert - {alertLevel.toUpperCase()} Risk</AlertTitle>
          <AlertDescription className="text-lg mt-2">
            Current conditions in {location} indicate {alertLevel} heat risk. 
            {alertLevel === "extreme" && " Avoid outdoor activities and stay hydrated."}
            {alertLevel === "high" && " Limit outdoor exposure and take frequent breaks."}
          </AlertDescription>
        </Alert>

        <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
          <PowerBIDashboard />
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{animationDelay: '1.5s'}}>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Current Temperature</h3>
              <Badge variant="outline" className="text-lg px-3 py-1 animate-pulse">
                {Math.round(currentTemp)}°F
              </Badge>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Temperature</span>
                  <span>{Math.round(currentTemp)}°F</span>
                </div>
                <Progress value={(currentTemp / 120) * 100} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Heat Index</span>
                  <span>{Math.round(heatIndex)}°F</span>
                </div>
                <Progress value={(heatIndex / 130) * 100} className="h-3" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Heat Alert Levels</h3>
            <div className="space-y-3">
              {[
                { level: "Low", temp: "< 85°F", color: "bg-green-500" },
                { level: "Moderate", temp: "85-95°F", color: "bg-yellow-500" },
                { level: "High", temp: "95-105°F", color: "bg-orange-500" },
                { level: "Extreme", temp: "> 105°F", color: "bg-red-500" }
              ].map((alert, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in" style={{animationDelay: `${1.8 + index * 0.1}s`}}>
                  <div className={`w-4 h-4 rounded-full ${alert.color} animate-pulse`}></div>
                  <span className="font-medium">{alert.level}</span>
                  <span className="text-gray-600">{alert.temp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: '2.1s'}}>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="text-blue-500" />
            Safety Recommendations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">During High Heat:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Stay indoors during peak hours (10 AM - 6 PM)</li>
                <li>• Drink water every 15-20 minutes</li>
                <li>• Wear light-colored, loose-fitting clothing</li>
                <li>• Take frequent breaks in shade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Emergency Signs:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• High body temperature (103°F+)</li>
                <li>• Hot, red, dry or damp skin</li>
                <li>• Fast, strong pulse</li>
                <li>• Nausea, confusion, losing consciousness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 py-4 animate-fade-in" style={{animationDelay: '2.4s'}}>
          <p>Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
