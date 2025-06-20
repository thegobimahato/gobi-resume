import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Resume",
};

export default function Resumes() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-3 py-6">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href={"editor"}>
          <PlusCircle className="size-5" />
          <span>New resume</span>
        </Link>
      </Button>
    </main>
  );
}
