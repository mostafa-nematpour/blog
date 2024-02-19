import type { Category } from '@/types/category'

interface Post {
  id: Number
  title: string
  author: string
  slug: string
  description: string
  imageURL: string
  imageAlt: string
  blogColor: string
  body: string
  categories: Category[]
}

export type { Post }
