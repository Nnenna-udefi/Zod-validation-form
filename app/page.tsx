"use client";
import { Form } from "./components/form";
import { ZodForm } from "./components/zodform";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row gap-10 items-center justify-between p-24">
      <ZodForm />
      <Form />
    </main>
  );
}
