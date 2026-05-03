import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-xl border-b border-border/70 shadow-sm" : "bg-transparent"
        }`}
        style={isScrolled ? { background: "hsl(205 66% 96% / 0.92)" } : {}}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {isHome ? (
              <button onClick={() => scrollToSection("#")}
                className="display font-black text-lg tracking-tight hover:text-primary transition-colors duration-200">
                <span className="text-gradient">AN</span>
                <span className="text-muted-foreground/40">.</span>
              </button>
            ) : (
              <Link to="/" className="display font-black text-lg tracking-tight hover:text-primary transition-colors duration-200">
                <span className="text-gradient">AN</span>
                <span className="text-muted-foreground/40">.</span>
              </Link>
            )}

            <div className="hidden md:flex items-center gap-1">
              {isHome && navItems.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-sky-50/75">
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => isHome ? scrollToSection("#contact") : (window.location.href = "/#contact")}
                size="sm"
                className="ml-2 btn-primary text-white border-0 text-xs px-5 font-mono font-semibold rounded-lg">
                Get in Touch
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-sky-50/70 transition-colors text-foreground"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 left-3 right-3 z-50 p-4 space-y-2 md:hidden border border-border shadow-lg rounded-lg"
              style={{ background: "hsl(205 72% 96% / 0.96)" }}
            >
              {isHome && navItems.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium py-3 text-foreground hover:text-primary transition-colors border-b border-border/40">
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  if (isHome) {
                    scrollToSection("#contact");
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
                className="w-full mt-4 btn-primary text-white border-0 font-mono font-semibold rounded-lg">
                Get in Touch
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
