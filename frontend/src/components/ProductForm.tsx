"use client"
import { useState } from "react"
import { createProduct } from "@/lib/api"

export default function ProductForm({ onCreated }: { onCreated: () => void }) {
  const [form, setForm] = useState({ name: "", price: 0, quantity: 0, description: "" })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createProduct(form)
    setForm({ name: "", price: 0, quantity: 0, description: "" })
    onCreated()
  }

  const inputClass = "w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-2xl">
      <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        Register Asset
      </h2>
      
      <form onSubmit={submit} className="space-y-4">
        <input className={inputClass} placeholder="PRODUCT NAME" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        
        <div className="grid grid-cols-2 gap-4">
          <input className={inputClass} type="number" placeholder="PRICE ($)" onChange={e => setForm({...form, price: +e.target.value})} required />
          <input className={inputClass} type="number" placeholder="QUANTITY" onChange={e => setForm({...form, quantity: +e.target.value})} required />
        </div>

        <textarea className={`${inputClass} h-24 resize-none`} placeholder="DESCRIPTION..." value={form.description} onChange={e => setForm({...form, description: e.target.value})} />

        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] active:scale-[0.98]">
          Add product
        </button>
      </form>
    </div>
  )
}