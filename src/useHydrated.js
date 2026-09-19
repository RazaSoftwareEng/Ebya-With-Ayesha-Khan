import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

// false while rendering on the server and during hydration, true afterwards.
// Use it for values that only exist in the browser (query strings), so the
// first client render matches the prerendered HTML.
export function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}
