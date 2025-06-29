
import { Twitch } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-twitch-dark via-twitch-dark-alt to-twitch-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-twitch-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-twitch-purple-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-twitch-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-twitch-purple to-twitch-purple-light rounded-2xl flex items-center justify-center shadow-2xl animate-glow-pulse">
                <Twitch className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-twitch-purple to-twitch-purple-light rounded-2xl blur opacity-75 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-twitch-white via-twitch-purple-light to-twitch-purple bg-clip-text text-transparent leading-tight">
            Stream11
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-twitch-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              The ultimate Twitch bot integration platform
            </p>
            <p className="text-lg text-twitch-white/60 max-w-2xl mx-auto">
              Enhance your streaming experience with powerful automation, 
              interactive commands, and seamless chat management tools designed for modern streamers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-twitch-purple hover:bg-twitch-purple-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-twitch-purple/30 animate-glow-pulse"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-twitch-purple text-twitch-purple hover:bg-twitch-purple hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-twitch-dark-alt/50 backdrop-blur-sm border border-twitch-purple/20 rounded-xl p-6 hover:border-twitch-purple/40 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-twitch-purple/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-twitch-purple text-xl">🤖</span>
            </div>
            <h3 className="text-twitch-white font-semibold text-lg mb-2">Smart Automation</h3>
            <p className="text-twitch-white/60">Intelligent bot responses and automated moderation</p>
          </div>

          <div className="bg-twitch-dark-alt/50 backdrop-blur-sm border border-twitch-purple/20 rounded-xl p-6 hover:border-twitch-purple/40 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-twitch-purple/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-twitch-purple text-xl">⚡</span>
            </div>
            <h3 className="text-twitch-white font-semibold text-lg mb-2">Real-time Integration</h3>
            <p className="text-twitch-white/60">Seamlessly connect with your Twitch channel</p>
          </div>

          <div className="bg-twitch-dark-alt/50 backdrop-blur-sm border border-twitch-purple/20 rounded-xl p-6 hover:border-twitch-purple/40 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-twitch-purple/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-twitch-purple text-xl">📊</span>
            </div>
            <h3 className="text-twitch-white font-semibold text-lg mb-2">Analytics Dashboard</h3>
            <p className="text-twitch-white/60">Track engagement and optimize your stream</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
