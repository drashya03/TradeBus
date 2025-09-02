import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Recycle, Monitor } from "lucide-react";

export default function Learn() {
  return (
    <Layout>
      <PageHeader
        title="Learning Hub"
        subtitle="Guides, tutorials, and best practices to help you recycle metals, plastics, and e‑waste safely and profitably."
        cta={<Button size="lg">Subscribe</Button>}
      />

      <section className="container py-10">
        <h2 className="mb-4 text-xl font-semibold">Categories</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.title}>
              <CardHeader className="flex-row items-center gap-3">
                <div className={`flex size-10 items-center justify-center rounded-md ${c.badge}`}>{c.icon}</div>
                <div>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest Articles</h2>
          <Button variant="link" className="text-primary">View All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card key={a.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{a.title}</CardTitle>
                <CardDescription>{a.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{a.length}</span>
                <span>{a.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}

const categories = [
  {
    title: "Metals",
    desc: "Grades, separation, and safe processing.",
    badge: "bg-emerald-100 text-emerald-700",
    icon: <Recycle className="size-5" />,
    tags: ["Copper", "Aluminum", "Stainless", "Brass"],
  },
  {
    title: "Plastics",
    desc: "Identification and recycling techniques.",
    badge: "bg-cyan-100 text-cyan-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M10 2h4v2l1 2v4a4 4 0 0 1-2 3.46V22h-2v-8.54A4 4 0 0 1 9 10V6l1-2V2z"/></svg>
    ),
    tags: ["HDPE", "PET", "PP", "PVC"],
  },
  {
    title: "E‑waste",
    desc: "Disassembly and value extraction.",
    badge: "bg-amber-100 text-amber-700",
    icon: <Monitor className="size-5" />,
    tags: ["PCBs", "CPUs", "RAM", "HDDs"],
  },
];

const articles = [
  {
    title: "How to Grade Copper Wire Like a Pro",
    desc: "Visual cues and quick tests for common copper categories.",
    length: "6 min read",
    date: "July 8, 2025",
  },
  {
    title: "Plastic Symbols Explained (1–7)",
    desc: "Where to find them, what they mean, and how to sort fast.",
    length: "7 min read",
    date: "June 30, 2025",
  },
  {
    title: "Safe E‑waste Disassembly Workflow",
    desc: "Bench setup, PPE, and step‑by‑step process for desktops.",
    length: "10 min read",
    date: "June 18, 2025",
  },
];
