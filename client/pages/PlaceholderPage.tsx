import Layout from "@/components/site/Layout";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Layout>
      <section className="container py-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          This page is a placeholder. Tell me what content you want here and Ill build it to match your design perfectly.
        </p>
      </section>
    </Layout>
  );
}
