import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {isHome ? (
              <button
                onClick={() => scrollToSection("#")}
                className="mono text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                AN<span className="text-foreground">.</span>
              </button>
            ) : (
              <Link
                to="/"
                className="mono text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                AN<span className="text-foreground">.</span>
              </Link>
            )}

            <div className="hidden md:flex items-center gap-1">
              {isHome &&
                navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              <Button
                onClick={() => (isHome ? scrollToSection("#contact") : (window.location.href = "/#contact"))}
                size="sm"
                className="ml-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-5"
              >
                Get in Touch
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 p-6 space-y-2 z-50">
            {isHome &&
              navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium py-3 text-foreground hover:text-primary transition-colors border-b border-border/50"
                >
                  {item.name}
                </button>
              ))}
            <Button
              onClick={() => {
                isHome ? scrollToSection("#contact") : (window.location.href = "/#contact");
              }}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
