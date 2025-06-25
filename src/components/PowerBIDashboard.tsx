
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BarChart3 } from "lucide-react";

export const PowerBIDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-800">Real-time Analytics Dashboard</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-white/50"
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        <p className="text-gray-600 mt-2">Live heatwave monitoring and predictive analytics</p>
      </div>
      
      {isExpanded && (
        <div className="p-6 animate-fade-in">
          <div className="rounded-lg overflow-hidden shadow-lg border">
            <iframe 
              title="Heli-O-Sphere Dashboard" 
              width="100%" 
              height="400" 
              src="https://app.powerbi.com/view?r=eyJrIjoiNDZiMjM1MDktMDAxZi00ZWVmLWE5NGEtOTliMjA1MDAxMDUxIiwidCI6IjI4ZDg1ZTFlLTI3ODktNDM2OC04NmZiLWU5M2Q1YjJjMmY0MSJ9" 
              frameBorder="0" 
              allowFullScreen={true}
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Interactive dashboard powered by real-time weather data and ML predictions
          </p>
        </div>
      )}
    </Card>
  );
};
