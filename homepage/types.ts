export interface Product {
    id: string
    title: string
    description: string
    price: string
    status: 'for-sale' | 'sold'
    images: string[]
    link?: string
  }
  