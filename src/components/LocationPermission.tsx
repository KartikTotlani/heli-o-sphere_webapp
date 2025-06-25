
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MapPin, Shield } from "lucide-react";

interface LocationPermissionProps {
  onPermissionChange: (granted: boolean) => void;
}

export const LocationPermission = ({ onPermissionChange }: LocationPermissionProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAllow = async () => {
    setIsLoading(true);
    try {
      await onPermissionChange(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeny = () => {
    onPermissionChange(false);
  };

  return (
    <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 animate-bounce">
      <Shield className="h-5 w-5 text-blue-500" />
      <AlertTitle className="text-blue-800">Location Access Required</AlertTitle>
      <AlertDescription className="text-blue-700 mb-4">
        Heli-O-Sphere needs access to your location to provide accurate local heatwave alerts and recommendations.
      </AlertDescription>
      <div className="flex gap-3">
        <Button 
          onClick={handleAllow} 
          disabled={isLoading}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <MapPin className="w-4 h-4 mr-2" />
          {isLoading ? "Getting Location..." : "Allow Location"}
        </Button>
        <Button 
          variant="outline" 
          onClick={handleDeny}
          className="border-red-300 text-red-600 hover:bg-red-50"
        >
          Deny
        </Button>
      </div>
    </Alert>
  );
};
