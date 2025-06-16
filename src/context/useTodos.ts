import { useContext } from "react"
import { TodoContext, type TodoContextType } from "./TodoContext"

export const useTodos = (): TodoContextType => {
    const context = useContext(TodoContext)
    if (!context) throw new Error("The 'useTodos()' method must be called within a TodoProvider")
    return context
}