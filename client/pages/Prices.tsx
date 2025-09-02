import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";

export default function Prices() {
  const [region, setRegion] = useState("us");
  const [category, setCategory] = useState("all");

  const data = useMemo(() => filterData(region, category), [region, category]);

  return (
    <Layout>
      <PageHeader
        title="Price Board"
        subtitle="Track current market prices for common scrap materials. Values are estimates and vary by location."
      />

      <section className="container py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground">Region</div>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="eu">Europe</SelectItem>
                  <SelectItem value="apac">APAC</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground">Category</div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="mt-2"><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="metals">Metals</SelectItem>
                  <SelectItem value="plastics">Plastics</SelectItem>
                  <SelectItem value="ewaste">E‑waste</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container pb-16">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Material</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price/kg</TableHead>
                <TableHead className="text-right">Weekly</TableHead>
                <TableHead className="text-right">Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((r) => (
                <TableRow key={r.name}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell className="capitalize">{r.category}</TableCell>
                  <TableCell className="text-right">{r.price}</TableCell>
                  <TableCell className={`text-right ${r.weekly.startsWith('-') ? 'text-red-600':'text-green-600'}`}>{r.weekly}</TableCell>
                  <TableCell className="text-right">{r.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </Layout>
  );
}

function filterData(region: string, category: string) {
  const rows = PRICES[region as keyof typeof PRICES] ?? [];
  return rows.filter((r) => (category === 'all' ? true : r.category === category));
}

type Row = { name: string; category: 'metals'|'plastics'|'ewaste'; price: string; weekly: string; updated: string };
const PRICES: Record<string, Row[]> = {
  us: [
    { name: 'Copper Wire (Bare)', category: 'metals', price: '$4.80', weekly: '+$0.25', updated: 'Today' },
    { name: 'Aluminum Cans', category: 'metals', price: '$1.20', weekly: '-$0.05', updated: 'Today' },
    { name: 'Steel Scrap', category: 'metals', price: '$0.15', weekly: '+$0.02', updated: 'Yesterday' },
    { name: 'HDPE Plastic', category: 'plastics', price: '$0.45', weekly: '+$0.05', updated: 'Today' },
    { name: 'PET Bottles (baled)', category: 'plastics', price: '$0.32', weekly: '+$0.03', updated: '2d ago' },
    { name: 'Mixed PCBs', category: 'ewaste', price: '$8.40', weekly: '+$0.90', updated: 'Today' },
    { name: 'Gold‑finger RAM', category: 'ewaste', price: '$25.60', weekly: '+$1.10', updated: 'Today' },
  ],
  eu: [
    { name: 'Copper Wire (Bare)', category: 'metals', price: '€4.10', weekly: '+€0.20', updated: 'Today' },
    { name: 'Aluminum Cans', category: 'metals', price: '€1.05', weekly: '-€0.02', updated: 'Today' },
    { name: 'HDPE Plastic', category: 'plastics', price: '€0.38', weekly: '+€0.03', updated: 'Yesterday' },
    { name: 'Mixed PCBs', category: 'ewaste', price: '€7.90', weekly: '+€0.60', updated: '2d ago' },
  ],
  apac: [
    { name: 'Copper Wire (Bare)', category: 'metals', price: '¥34.20', weekly: '+¥1.70', updated: 'Today' },
    { name: 'Aluminum Cans', category: 'metals', price: '¥8.90', weekly: '+¥0.10', updated: 'Today' },
    { name: 'PET Bottles (baled)', category: 'plastics', price: '¥2.50', weekly: '+¥0.05', updated: 'Yesterday' },
    { name: 'Gold‑finger RAM', category: 'ewaste', price: '¥185.00', weekly: '+¥3.00', updated: 'Today' },
  ],
};
