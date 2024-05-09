import type { Category } from '@/types/category'

export interface Post {
  id: Number
  title: string
  author: string
  slug: string
  description: string
  imageURL: string | null
  imageAlt: string | null
  blogColor: string
  body: string
  categories: Category[]
  createAt: string
  updateAt: string
}
