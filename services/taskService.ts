import { Board, BoardColumnItems } from "@/stores/boardStore"

async function getMockedStates() {
  const data = {
    total: 3,
    data: [
      {
        id: "b3adbb39-739f-4d54-a86e-cf13d27e4779",
        name: "To Do",
        createdAt: "2023-06-01T02:03:57.030Z",
        updatedAt: "2023-06-02T02:03:57.030Z",
      },
      {
        id: "fd96874e-d733-4616-aa62-547fbeef4d88",
        name: "In Progress",
        createdAt: "2023-06-01T02:03:57.030Z",
        updatedAt: "2023-06-02T02:03:57.030Z",
      },
      {
        id: "710ab461-a419-45eb-b460-4fc5027a9625",
        name: "Done",
        createdAt: "2023-06-01T02:03:57.030Z",
        updatedAt: "2023-06-02T02:03:57.030Z",
      },
    ],
  }

  return data
}

async function getMockedTasks() {
  const data = {
    total: 1,
    data: [
      {
        id: "5e117e0a-5dbc-440e-ab3b-47c0c0dd22bd",
        createdAt: "2023-06-01T02:03:57.030Z",
        updatedAt: "2023-06-02T02:03:57.030Z",
        image: null,
        title: "Create the server for this app",
        stateId: "b3adbb39-739f-4d54-a86e-cf13d27e4779",
      },
      {
        id: "c2c8e06a-b6c9-44c6-9738-ea862ce27d1b",
        createdAt: "2023-06-01T02:03:57.030Z",
        updatedAt: "2023-06-02T02:03:57.030Z",
        image: null,
        title: "Implement state management",
        stateId: "fd96874e-d733-4616-aa62-547fbeef4d88",
      },
      {
        id: "c5505238-d52c-4de2-b21c-3e7a47810643",
        createdAt: "2023-06-01T02:03:57.030Z",
        updatedAt: "2023-06-02T02:03:57.030Z",
        image: null,
        title: "Use images on tasks",
        stateId: "fd96874e-d733-4616-aa62-547fbeef4d88",
      },
    ],
  }

  return data
}

export async function getTasksGroupedByColumn() {
  const states = await getMockedStates()

  const columns = new Map<string, BoardColumnItems>()

  states.data.forEach((state) => {
    if (columns.get(state.id)) {
      return
    }

    columns.set(state.id, {
      id: state.id,
      name: state.name,
      tasks: [],
    })
  })

  const tasks = await getMockedTasks()

  tasks.data.forEach((task) => {
    const taskColumn = columns.get(task.stateId)

    if (!taskColumn) {
      return
    }

    columns.set(task.stateId, {
      ...taskColumn,
      tasks: [...taskColumn.tasks, task],
    })
  })

  const board: Board = { columns }

  return board
}
