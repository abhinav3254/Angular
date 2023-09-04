import { Publishers } from "./Publishers"
import { Author } from "./Author"

export interface Book {
  id: number
  publishers: Publishers
  author: Author
  imageUrl: string
  title: string
  genre: string
  price: string
  description: string
  category: string
}
