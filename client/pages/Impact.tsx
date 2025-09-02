import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Leaf, BarChart } from "lucide-react";

export default function Impact(){
  return (
    <Layout>
      <PageHeader
        title="Impact Tools"
        subtitle="See how your actions reduce waste and emissions. Explore calculators and global datasets."
      />

      <section className="container py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Leaf className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Environmental Impact Calculator</CardTitle>
                <CardDescription>Estimate CO₂e savings from metals, plastics, and e‑waste you recycle.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-xs text-muted-foreground">Copper (kg)</label>
                  <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="10" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Aluminum (kg)</label>
                  <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="20" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Plastics (kg)</label>
                  <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="15" />
                </div>
              </div>
              <Button className="mt-4">Calculate</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <BarChart className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Global Recycling Statistics</CardTitle>
                <CardDescription>Interactive charts exploring recycling rates and commodity trends.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Charts will render here. Connect a data source or specify the metrics you want and Ill implement them.</p>
              <Button className="mt-4">View Dashboard</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container pb-16">
        <h2 className="mb-4 text-xl font-semibold">Education</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Local Recycling Map</CardTitle>
              <CardDescription>Find nearby centers that buy or accept materials.</CardDescription>
            </CardHeader>
            <CardContent><Button>Open Map</Button></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Safety Guidelines</CardTitle>
              <CardDescription>PPE, tool handling, and safe disassembly practices.</CardDescription>
            </CardHeader>
            <CardContent><Button>Read Guide</Button></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Certification Paths</CardTitle>
              <CardDescription>Explore industry-recognized training and certificates.</CardDescription>
            </CardHeader>
            <CardContent><Button>Explore Programs</Button></CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
