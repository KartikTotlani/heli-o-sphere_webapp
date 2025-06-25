
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HeatwaveAnimation } from "@/components/HeatwaveAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 relative overflow-hidden">
      <HeatwaveAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6 space-y-8">
        <div className="text-center py-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with our team for support, partnerships, or any questions about Heli-O-Sphere
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm p-8 animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.3s'}}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">support@heliosphere.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.9s'}}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">123 Climate Tech Avenue<br />Akurdi, Pune 411044</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: '1.5s'}}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST<br />Emergency Support: 24/7</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center animate-fade-in" style={{animationDelay: '1.8s'}}>
          <h2 className="text-3xl font-bold mb-4">Emergency Weather Alerts</h2>
          <p className="text-xl mb-6">
            For immediate weather emergencies, please contact your local emergency services at 911
          </p>
          <p className="text-lg opacity-90">
            Our 24/7 monitoring system provides real-time alerts, but always prioritize official emergency channels during severe weather events.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
