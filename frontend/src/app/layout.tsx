import "./globals.css"

export const metadata = {
  title: "Product Management",
  description: "Product management dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {children}
        </div>
      </body>
    </html>
  )
}
