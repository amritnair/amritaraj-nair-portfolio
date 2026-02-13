import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Share2, Mail, Linkedin, Link2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BASE = "/amritaraj-nair-portfolio";
const PDF_URL = `${BASE}/Amritaraj_Nair_Resume.pdf`;
const PORTFOLIO_URL = "https://amritnair.github.io/amritaraj-nair-portfolio/#/resume";

const Resume = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = PDF_URL;
    a.download = "Amritaraj_Nair_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_URL);
      setCopied(true);
      toast({ title: "Link copied!", description: "Resume page link copied to clipboard." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Error", description: "Could not copy link.", variant: "destructive" });
    }
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent("Amritaraj Nair — Resume");
    const body = encodeURIComponent(
      `Hi,\n\nHere is Amritaraj Nair's resume:\n${PORTFOLIO_URL}\n\nBest regards`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(PORTFOLIO_URL);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Amritaraj Nair — Resume",
          text: "Check out Amritaraj Nair's resume",
          url: PORTFOLIO_URL,
        });
      } catch {
        // user cancelled share — do nothing
      }
    } else {
      setShowShare(!showShare);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <h1 className="text-sm font-medium mono tracking-wider uppercase text-muted-foreground">
            Resume
          </h1>

          <div className="flex gap-2">
            {/* Share */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={handleNativeShare}
                className="gap-2 border-border hover:border-primary/50 hover:bg-primary/5"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>

              {/* Share dropdown (desktop fallback when no native share API) */}
              {showShare && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-border bg-card p-2 shadow-lg"
                >
                  <button
                    onClick={handleCopyLink}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                    {copied ? "Copied!" : "Copy link"}
                  </button>
                  <button
                    onClick={handleEmailShare}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Send via email
                  </button>
                  <button
                    onClick={handleLinkedInShare}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    Share on LinkedIn
                  </button>
                </motion.div>
              )}
            </div>

            {/* Download */}
            <Button
              size="sm"
              onClick={handleDownload}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Close dropdown when clicking outside */}
      {showShare && (
        <div className="fixed inset-0 z-40" onClick={() => setShowShare(false)} />
      )}

      {/* Resume preview */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* PDF embed */}
          <div className="rounded-2xl border border-border/50 overflow-hidden bg-white shadow-2xl shadow-primary/5">
            <object
              data={PDF_URL}
              type="application/pdf"
              className="w-full"
              style={{ height: "calc(100vh - 160px)", minHeight: "600px" }}
            >
              {/* Fallback for browsers that can't embed PDFs */}
              <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-card">
                <p className="text-muted-foreground mb-4">
                  Your browser doesn't support inline PDF viewing.
                </p>
                <Button onClick={handleDownload} className="gap-2 bg-primary hover:bg-primary/90">
                  <Download className="h-4 w-4" />
                  Download Resume PDF
                </Button>
              </div>
            </object>
          </div>

          {/* Bottom action bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownload}
              className="gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCopyLink}
              className="gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5"
            >
              {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
              {copied ? "Link Copied!" : "Copy Share Link"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleEmailShare}
              className="gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <Mail className="h-4 w-4" />
              Email Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLinkedInShare}
              className="gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <Linkedin className="h-4 w-4" />
              Share on LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
