"use client"

import useBoardStore from "@/stores/boardStore"
import { useEffect } from "react"
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd"
import Column from "./column"

export default function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ])

  useEffect(() => {
    getBoard()
  }, [getBoard])

  const handleOnDragEnd = (result: DropResult) => {}

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3"
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column
                key={id}
                id={id}
                name={column.name}
                tasks={column.tasks}
                index={index}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
