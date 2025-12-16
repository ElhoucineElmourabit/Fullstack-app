export default function ProductTable({ products }: { products: any[] }) {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <table className="w-full text-left">
        <thead className="bg-slate-800/30 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
          <tr>
            <th className="px-6 py-4">Identification</th>
            <th className="px-6 py-4">Valuation</th>
            <th className="px-6 py-4">Inventory</th>
            <th className="px-6 py-4 text-right">Registered</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50 text-sm">
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-blue-500/[0.02] transition-colors group">
              <td className="px-6 py-5">
                <div className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{p.name}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">{p.description}</div>
              </td>
              <td className="px-6 py-5 font-mono text-blue-400/80">${p.price.toLocaleString()}</td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: `${Math.min(p.quantity, 100)}%` }}></div>
                  </div>
                  <span className="text-xs font-mono">{p.quantity}</span>
                </div>
              </td>
              <td className="px-6 py-5 text-right text-xs text-slate-500 font-mono">
                {new Date(p.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-12 text-center text-slate-600 italic font-mono text-xs">
                NO DATA DETECTED IN LOCAL SECTOR
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}