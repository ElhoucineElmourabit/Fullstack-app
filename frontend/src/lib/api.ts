const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export async function getProducts() {
  const res = await fetch(`${API_URL}/api/products`, {
    cache: "no-store",
  })
  return res.json()
}

export async function createProduct(data: any) {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
