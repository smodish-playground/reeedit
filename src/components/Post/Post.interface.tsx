export interface IPost {
  id: string
  title: string
  content: string
  createdAt: number
  createdBy: string
  topics: string[]
  votes: { up: number; down: number }
}
