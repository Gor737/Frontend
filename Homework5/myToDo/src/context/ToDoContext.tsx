import { createContext } from "react"
import type { ContextType } from "../types/ToDoTypes"


export const ToDoContext = createContext<ContextType | null>(null);