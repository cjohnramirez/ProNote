import React from "react";

export default function DiaryLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  )
}