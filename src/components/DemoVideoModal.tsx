
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface DemoVideoModalProps {
  children: React.ReactNode;
}

export const DemoVideoModal = ({ children }: DemoVideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full bg-black border-0 p-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="aspect-video bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 relative overflow-hidden">
            {/* AI Generated Heatwave Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6 p-8">
                <h2 className="text-4xl font-bold animate-pulse">Heli-O-Sphere Demo</h2>
                <p className="text-xl">Advanced Heatwave Monitoring System</p>
                
                {/* Animated heat waves */}
                <div className="relative w-full h-32 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-2 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full animate-pulse"
                      style={{
                        top: `${i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                {/* Demo Features */}
                <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold mb-2">🌡️ Real-time Monitoring</h3>
                    <p>Live temperature tracking and heat index calculations</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold mb-2">🤖 AI Predictions</h3>
                    <p>Machine learning powered heatwave forecasting</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold mb-2">🚨 Smart Alerts</h3>
                    <p>Location-based safety notifications and warnings</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold mb-2">📊 Analytics</h3>
                    <p>Comprehensive heat pattern analysis and reporting</p>
                  </div>
                </div>
                
                <div className="mt-8 animate-bounce">
                  <p className="text-lg">🔥 Protecting Communities Through Data-Driven Solutions 🔥</p>
                </div>
              </div>
            </div>
            
            {/* Heat wave animation overlay */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float-up"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
