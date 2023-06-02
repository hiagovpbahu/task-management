import { Task } from "@/stores/boardStore"
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd"

interface TaskCardProps {
  id: string
  task: Task
  index: number
  innerRef: (element: HTMLElement | null) => void
  draggableProps: DraggableProvidedDraggableProps
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

export default function TaskCard({
  id,
  task,
  index,
  innerRef,
  draggableProps,
  dragHandleProps,
}: TaskCardProps) {
  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className="space-y-2 rounded-md bg-white drop-shadow-md"
    >
      <h1>Hello</h1>
    </div>
  )
}

// 2:03:30
