"use client"    


import ProductForm from "@/components/ProductForm"
import ProductTable from "@/components/ProductTable"
import { useEffect, useState } from "react"
import { getProducts } from "@/lib/api"
export default function Dashboard() {
  const [products, setProducts] = useState([])

  const refreshData = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => { refreshData() }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tighter text-white">
              Product <span className="text-blue-500">Management V2</span>
            </h1>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase mt-2">
              Product Management Interface
            </p>
          </div>
          
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-4">
            <ProductForm onCreated={refreshData} />
          </aside>
          <section className="lg:col-span-8">
            <ProductTable products={products} />
          </section>
        </div>
      </div>
    </div>
  )
}