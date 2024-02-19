import type { Category } from '@/types/category'

interface Post {
  id: Number
  title: String
  author: String
  slug: String
  description: String
  imageURL: String
  imageAlt: String
  blogColor: String
  body: String
  categories: Category[]
}

export type { Post }
