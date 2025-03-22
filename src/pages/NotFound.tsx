
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background to-accent z-0 opacity-80" 
        aria-hidden="true"
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold tracking-tight">AssetGuard</span>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="glass border border-border/40 rounded-xl p-12 max-w-md w-full text-center animate-scale-in">
          <div className="mx-auto w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">404</h1>
          <p className="text-xl mb-6">Page not found</p>
          
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button className="w-full">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
