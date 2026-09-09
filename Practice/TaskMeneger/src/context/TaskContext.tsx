import { createContext } from "react";
import type { ContextType } from "../types/TaskTypes";

export const TaskContext = createContext<ContextType | null>(null);