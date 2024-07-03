import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next JS",
    template: "%s | Next JS",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
