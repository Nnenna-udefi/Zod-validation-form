"use client";
import { Form } from "./components/form";
import { ZodForm } from "./components/zodform";

export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col md:gap-10 gap-0 items-center justify-between p-24">
      <ZodForm />
      <Form />
    </main>
  );
}
