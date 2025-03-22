
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  PlusCircle, 
  LogOut, 
  Menu, 
  X,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="glass border-b border-border/40">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <Link to="/" className="text-xl font-semibold tracking-tight">
              AssetGuard
            </Link>
          </div>

          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          ) : (
            <nav className="flex items-center gap-6">
              <NavLinks isActive={isActive} />
            </nav>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="glass animate-fade-in border-b border-border/40 px-4 py-4">
          <nav className="flex flex-col gap-2">
            <NavLinks isActive={isActive} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isActive }: { isActive: (path: string) => boolean }) => {
  return (
    <>
      <Link
        to="/dashboard"
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          isActive("/dashboard")
            ? "bg-secondary text-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        }`}
      >
        <LayoutDashboard className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        to="/add-asset"
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          isActive("/add-asset")
            ? "bg-secondary text-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        }`}
      >
        <PlusCircle className="h-4 w-4" />
        Add Asset
      </Link>
      <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground">
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </>
  );
};

export default Navbar;
