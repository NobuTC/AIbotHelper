"use client";

import { createContext } from "react";

import { NextUIProvider } from "@nextui-org/system";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
