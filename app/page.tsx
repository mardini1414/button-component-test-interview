import React from "react";
import PreviewCard from "@/components/PreviewCard";
import Editor from "@/components/Editor";

export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-wrap-reverse justify-center gap-4 py-6 px-4">
      <PreviewCard />
      <Editor />
    </div>
  );
}
