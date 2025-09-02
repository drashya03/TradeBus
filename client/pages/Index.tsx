import { useEffect, useState } from "react";
import { DemoResponse } from "@shared/api";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Recycle, Monitor, Cpu, Play, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="container grid gap-8 py-10 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit bg-primary/10 text-primary">Sustainable Learning</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Learn, Connect, and Make an Impact
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Join our community of recycling enthusiasts and learn how to manage scrap materials sustainably while making a positive environmental impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-muted/30">
            <img
              src="/cover.png"
              alt="Scrap Education Platform hero"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-6 md:py-10">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Explore Categories</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                <Recycle className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Metals</CardTitle>
                <CardDescription>Types of metals, their grades, and processing.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="gap-1 px-0 text-primary">Explore Metals <ArrowRight className="size-4" /></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-cyan-100 text-cyan-700">
                <BottleIcon className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Plastics</CardTitle>
                <CardDescription>Identification, recycling methods, and sustainability.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="gap-1 px-0 text-primary">Explore Plastics <ArrowRight className="size-4" /></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                <Monitor className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">E‑waste</CardTitle>
                <CardDescription>Safe handling of electronics and value extraction.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="gap-1 px-0 text-primary">Explore E‑waste <ArrowRight className="size-4" /></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Hub */}
      <section className="container py-6 md:py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Content Hub</h2>
          <Button variant="link" className="text-primary">View All Articles</Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card key={a.title}>
              <CardHeader>
                <CardTitle className="text-lg">{a.title}</CardTitle>
                <CardDescription>{a.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{a.time}</span>
                <span>{a.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Multimedia Learning */}
      <section className="container py-6 md:py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Multimedia Learning</h2>
          <Button variant="link" className="text-primary">View All Videos</Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v) => (
            <Card key={v.title} className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <button className="absolute inset-0 m-auto grid size-12 place-items-center rounded-full bg-black/60 text-white">
                  <Play className="size-6" />
                </button>
              </div>
              <CardContent className="pt-4">
                <div className="text-sm font-medium">{v.title}</div>
                <div className="text-xs text-muted-foreground">{v.length}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Price Awareness */}
      <section className="container py-6 md:py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Price Awareness</h2>
          <Button variant="link" className="text-primary">View Full Price List</Button>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Material</TableHead>
                <TableHead className="text-right">Current Price (per kg)</TableHead>
                <TableHead className="text-right">Weekly Change</TableHead>
                <TableHead className="text-right">Monthly Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices.map((p) => (
                <TableRow key={p.material}>
                  <TableCell className="font-medium">{p.material}</TableCell>
                  <TableCell className="text-right">{p.price}</TableCell>
                  <TableCell className={`text-right ${p.weekly.startsWith("-") ? "text-red-600" : "text-green-600"}`}>{p.weekly}</TableCell>
                  <TableCell className="text-right">
                    <span className={`inline-flex items-center gap-1 ${trendClass(p.trend)}`}>
                      {p.trend === "Rising" && <TrendingUp className="size-4" />} 
                      {p.trend === "Falling" && <TrendingDown className="size-4" />} 
                      {p.trend}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Community Space */}
      <section className="container py-6 md:py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Community Space</h2>
          <Button variant="link" className="text-primary">Join Community</Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {posts.map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
                <CardDescription>
                  <span className="font-medium text-foreground">{p.author}</span> • {p.when}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.excerpt}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Education */}
      <section className="container pb-10 pt-6 md:pb-16">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Impact Education</h2>
          <Button variant="link" className="text-primary">Learn More</Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Cpu className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Environmental Impact Calculator</CardTitle>
                <CardDescription>Calculate how your recycling efforts contribute to reducing carbon footprint and conserving resources.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button>Try Calculator</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Global Recycling Statistics</CardTitle>
                <CardDescription>Interactive data visualizations showing the global impact of recycling on the environment and economy.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button>View Statistics</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="sr-only">{exampleFromServer}</div>
    </Layout>
  );
}

function BottleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 2h4v2l1 2v4a4 4 0 0 1-2 3.46V22h-2v-8.54A4 4 0 0 1 9 10V6l1-2V2z" />
    </svg>
  );
}

const articles = [
  {
    title: "Understanding Copper Recycling: A Comprehensive Guide",
    description: "Learn about the process of copper recycling, its benefits, and best practices for safe handling.",
    time: "5 min read",
    date: "June 12, 2025",
  },
  {
    title: "Plastic Identification: Types and Symbols Explained",
    description: "A beginner's guide to identifying different types of plastics using symbols and properties.",
    time: "8 min read",
    date: "May 28, 2025",
  },
  {
    title: "Extracting Value from Old Electronics: Step-by-Step Guide",
    description: "How to safely disassemble electronics and recover valuable components.",
    time: "10 min read",
    date: "Jan 9, 2025",
  },
];

const videos = [
  { title: "Copper Wire Stripping Techniques", length: "12:30" },
  { title: "Plastic Sorting Methods", length: "9:12" },
  { title: "E‑waste Disassembly Safety", length: "13:45" },
  { title: "Aluminum Can Processing", length: "7:40" },
];

const prices = [
  { material: "Copper Wire (bare)", price: "$4.80", weekly: "+$0.25", trend: "Rising" as const },
  { material: "Aluminum Cans", price: "$1.20", weekly: "-$0.05", trend: "Falling" as const },
  { material: "Steel Scrap", price: "$0.15", weekly: "+$0.02", trend: "Stable" as const },
  { material: "HDPE Plastic", price: "$0.45", weekly: "+$0.05", trend: "Rising" as const },
  { material: "Circuit Boards", price: "$15.75", weekly: "+$1.25", trend: "Rising" as const },
];

interface Post { title: string; author: string; when: string; excerpt: string }
const posts: Post[] = [
  {
    title: "Best tools for stripping insulation from copper wire?",
    author: "JohnRecycler",
    when: "2 hours ago",
    excerpt: "I’ve been using manual wire strippers but looking for something more efficient for larger quantities. Any recommendations?",
  },
  {
    title: "Local recycling centers accepting e‑waste in Portland?",
    author: "EcoScrapper",
    when: "Wednesday",
    excerpt: "Looking for recommendations that accept and do component‑level processing. Preferably free drop‑off."
  },
  {
    title: "How to identify different grades of stainless steel",
    author: "MetalMaster",
    when: "3 days ago",
    excerpt: "I’m having trouble distinguishing between 304 and 316 stainless steel. Are there any simple tests I can do at home?",
  },
  {
    title: "HDPE vs PP: which is better for resale?",
    author: "PolyPro",
    when: "1 week ago",
    excerpt: "Sorting post‑consumer plastics and want to maximize value. What tips do you have for identifying and cleaning?",
  },
];

type Trend = "Rising" | "Falling" | "Stable";
function trendClass(t: Trend) {
  if (t === "Rising") return "text-green-600";
  if (t === "Falling") return "text-red-600";
  return "text-muted-foreground";
}
