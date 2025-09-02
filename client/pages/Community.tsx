import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Community(){
  return (
    <Layout>
      <PageHeader
        title="Community"
        subtitle="Ask questions, share tips, and connect with recyclers around the world."
        cta={<Button size="lg">Start a discussion</Button>}
      />

      <section className="container py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {posts.map((p) => (
              <Card key={p.title}>
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-base">{p.title}</CardTitle>
                    <CardDescription>
                      <span className="font-medium text-foreground">{p.author}</span> • {p.when} • {p.replies} replies
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{p.excerpt}</CardContent>
              </Card>
            ))}
          </div>
          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {popular.map((t) => (
                    <li key={t.title} className="flex items-center justify-between">
                      <span className="truncate">{t.title}</span>
                      <span className="text-muted-foreground">{t.count}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Unanswered Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {unanswered.map((t) => (
                    <li key={t} className="list-disc pl-4 text-foreground">{t}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

const posts = [
  {
    title: "Best tools for stripping insulation from copper wire?",
    author: "JohnRecycler",
    when: "2 hours ago",
    replies: 12,
    tags: ["copper", "tools"],
    excerpt: "I’ve been using manual wire strippers but looking for something more efficient for larger quantities. Any recommendations?",
  },
  {
    title: "Local centers accepting e‑waste in Portland?",
    author: "EcoScrapper",
    when: "Yesterday",
    replies: 5,
    tags: ["ewaste", "locations"],
    excerpt: "Looking for places that take desktops and components. Preferably free or low‑cost drop‑off.",
  },
  {
    title: "How to identify different grades of stainless steel",
    author: "MetalMaster",
    when: "3 days ago",
    replies: 19,
    tags: ["stainless", "testing"],
    excerpt: "Trouble distinguishing between 304 and 316. Are there quick tests without expensive equipment?",
  },
];

const popular = [
  { title: "Is copper price peaking this quarter?", count: 42 },
  { title: "Best way to bale PET bottles", count: 35 },
  { title: "RAM vs CPU scrap yields", count: 28 },
  { title: "Sorting stainless grades fast", count: 22 },
];

const unanswered = [
  "Can you sell crushed aluminum cans mixed with steel tabs?",
  "Safe way to remove CRTs from old monitors?",
  "Do magnets affect scale readings when weighing scrap?",
];
