export interface Product {
  id: number
  name: string
  description: string
  price: number
  quantity: number
  createdAt: string
}

export interface ProductRequest {
  name: string
  description: string
  price: number
  quantity: number
}
