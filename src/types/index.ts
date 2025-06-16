import type { Guid } from "guid-typescript"

export type Todo = {
    id: Guid
    title: string
    done: boolean
}