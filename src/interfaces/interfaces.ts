interface ITodo{
      id: number,
      completed: boolean,
      title: string
}

export interface Handlers{
      onToggle?(id: number): void,
      onDelete?(id: number): void
      onAdd?(title: string): void,
}

export type Todo = ITodo