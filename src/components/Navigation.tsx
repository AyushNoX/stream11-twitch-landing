
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const handleLogin = () => {
    // Replace this URL with your actual Node.js frontend URL
    window.location.href = "https://your-nodejs-app.com/login";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-twitch-dark/90 backdrop-blur-md border-b border-twitch-purple/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-twitch-purple to-twitch-purple-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S11</span>
            </div>
            <span className="text-twitch-white font-semibold text-lg">Stream11</span>
          </div>
          
          <Button 
            onClick={handleLogin}
            className="bg-twitch-purple hover:bg-twitch-purple-dark text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-twitch-purple/25"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
