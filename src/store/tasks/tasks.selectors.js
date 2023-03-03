import { createSelector } from "reselect";

export const getTasks = state => state.tasks

export const getRecentTasks = createSelector(
  getTasks,
    tasks => [...tasks].sort((a, b) => +b.date - +a.date)
)
