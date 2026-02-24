import type { Metadata } from "next"
import "./globals.css"
import SnowBackground from "./components/SnowBackground"

export const metadata: Metadata = {
  title: "Sorawit Ardpru — Data Engineer Portfolio",
  description: "Currently practicing to become a Data Engineer, focusing on building efficient data pipelines, scalable architecture, and turning raw data into actionable insights.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SnowBackground />
        {children}
      </body>
    </html>
  )
}
