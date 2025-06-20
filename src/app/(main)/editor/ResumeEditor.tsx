"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import GeneralInfoForm from "./forms/GeneralInfoForm";

export default function ResumeEditor() {
  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>

      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="w-full p-3 md:w-1/2">
            <GeneralInfoForm />
          </div>
          <div className="grow md:border-1"></div>
          <div className="hidden w-1/2 md:flex">Right</div>
        </div>
      </main>

      <footer className="w-full border-t px-3 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant={"secondary"}>Previous Step</Button>
            <Button>Next Step</Button>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant={"secondary"}>
              <Link href={"/resumes"}>Close</Link>
            </Button>
            <p className="text-muted-foreground opacity-0">Saving...</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
