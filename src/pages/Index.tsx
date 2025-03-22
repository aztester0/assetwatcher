
import React from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, ArrowRight, Database, BarChart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background to-accent z-0 opacity-80" 
        aria-hidden="true"
      />
      
      {/* Navbar */}
      <header className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold tracking-tight">AssetGuard</span>
            </div>
            <nav className="flex items-center gap-6">
              <Link 
                to="/login" 
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Log in
              </Link>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative z-10 flex-1 flex flex-col justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Keep track of your valuable assets with precision
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            AssetGuard helps you document and organize your purchases for insurance purposes with a simple, elegant interface.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="glass p-6 rounded-xl border border-border/40 flex flex-col items-center text-center hover-scale">
              <div className="p-3 rounded-full bg-primary/20 mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Assets</h3>
              <p className="text-muted-foreground">
                Document and categorize all your valuable purchases in one secure place
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-border/40 flex flex-col items-center text-center hover-scale">
              <div className="p-3 rounded-full bg-primary/20 mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visual Analytics</h3>
              <p className="text-muted-foreground">
                View detailed charts and insights about your asset collection
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-border/40 flex flex-col items-center text-center hover-scale">
              <div className="p-3 rounded-full bg-primary/20 mb-4">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export Reports</h3>
              <p className="text-muted-foreground">
                Generate CSV or HTML reports for insurance and personal records
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 bg-accent/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">AssetGuard</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AssetGuard. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
