export const RECENT_FIRST = 'RECENT_FIRST'

export function sortTasksRecentFirst(toggled) {
  return {
    type: RECENT_FIRST,
    toggled
  }
}