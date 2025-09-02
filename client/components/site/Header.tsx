import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/learn", label: "Learn" },
    { to: "/prices", label: "Prices" },
    { to: "/community", label: "Community" },
    { to: "/impact", label: "Impact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Recycle className="size-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
            Trade Bus
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="container grid gap-2 py-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="ghost" className="flex-1">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
