import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Minimum 8 characters"),
  confirm: z.string().min(8),
  terms: z.literal(true, { errorMap: () => ({ message: "You must accept the terms" }) }),
}).refine((d) => d.password === d.confirm, {
  message: "Passwords do not match",
  path: ["confirm"],
});

type FormValues = z.infer<typeof schema>;

export default function Signup(){
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues){
    await new Promise((r) => setTimeout(r, 700));
    localStorage.setItem("auth", JSON.stringify({ name: values.name, email: values.email }));
    toast.success("Account created");
    navigate("/");
  }

  return (
    <Layout>
      <PageHeader title="Create account" subtitle="Join the Scrap Education community and start learning." />
      <section className="container py-10">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Enter your details to create an account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" autoComplete="email" {...register("email")} />
                  {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" autoComplete="new-password" {...register("password")} />
                  {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input id="confirm" type="password" autoComplete="new-password" {...register("confirm")} />
                  {errors.confirm && <p className="text-sm text-red-600">{errors.confirm.message}</p>}
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" {...register("terms")}/>
                  <span>I agree to the <a className="text-primary underline-offset-4 hover:underline" href="#">Terms</a></span>
                </label>
                {errors.terms && <p className="-mt-2 text-sm text-red-600">{errors.terms.message as string}</p>}

                <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Creating..." : "Create account"}</Button>
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary underline-offset-4 hover:underline">Log in</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
