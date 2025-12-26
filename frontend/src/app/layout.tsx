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
      <body className="bg-[#020617] text-gray-900"> {/* Updated BG to match Dashboard */}
        <div className="max-w-5xl mx-auto px-6 py-8 min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          
          
          <footer className="mt-12 py-6 border-t border-slate-800/50 text-center">
             <p className="text-slate-600 font-mono text-[10px] tracking-[0.3em] uppercase">
               Deployed by <span className="text-slate-400">Elhoucine Elmourabit</span> & <span className="text-slate-400">Yassine Hachger</span>
               & <span className="text-slate-400">Hamza Dahbani</span> & <span className="text-slate-400">Zakaria Azmi</span>
             </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
