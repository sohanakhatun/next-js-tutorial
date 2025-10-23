"use client";
import { useEffect } from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("Blog layout mounted"); // layout do not re render themselves when we navigate between routes.
  }, []);
  return (
    <div className="flex flex-col">
      <h1>Blog Layout</h1>

      <div>{children}</div>
    </div>
  );
}
