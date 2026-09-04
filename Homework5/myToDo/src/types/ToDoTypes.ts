export type ItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export type ContextType = {
  todos: ItemType[];
  onAdd: (title: string) => void;
  onRemove: (id: number) => void;
  onComplete: (id: number) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

export type FilterType = "all" | "active" | "completed";