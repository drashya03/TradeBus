import { Link } from "react-router-dom";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-card">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold">Trade Bus</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Explore recycling with knowledge and tools to reduce waste, earn
            more from scrap, and protect the environment.
          </p>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-foreground">
              <Github className="size-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground">
              <Twitter className="size-5" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-foreground">
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/learn" className="hover:text-foreground">Learn</Link></li>
            <li><Link to="/prices" className="hover:text-foreground">Price Board</Link></li>
            <li><Link to="/community" className="hover:text-foreground">Community</Link></li>
            <li><Link to="/impact" className="hover:text-foreground">Impact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Guides</a></li>
            <li><a href="#" className="hover:text-foreground">Blog</a></li>
            <li><a href="#" className="hover:text-foreground">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Email: hello@example.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Portland, OR</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2025 Scrap Education Platform. All rights reserved.</p>
          <div className="flex gap-4"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}
