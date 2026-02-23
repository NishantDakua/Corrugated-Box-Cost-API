"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Product: {id}</h1>
    </div>
  );
}
