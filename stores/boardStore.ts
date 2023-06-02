import { getTasksGroupedByColumn } from "@/services/taskService"
import { create } from "zustand"

export interface BoardState {
  board: Board
  getBoard: () => void
}

export interface Board {
  columns: Map<string, BoardColumnItems>
}

export interface BoardColumnItems {
  id: string
  name: string
  tasks: Task[]
}

export interface Task {
  id: string
  title: string
  createdAt: string
  image?: Image | null
  stateId: string
}

interface Image {
  bucketId: string
  fileId: string
}

const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<string, BoardColumnItems>(),
  },
  getBoard: async () => {
    const board = await getTasksGroupedByColumn()
    set({ board })
  },
}))

export default useBoardStore
