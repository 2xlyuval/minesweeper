export const GAME_OVER = "game-over"
export const RESTART_GAME = "restart-game"

type EventCallback = (...args: any[]) => void

class EventBus {
  private events: Map<string, EventCallback[]> = new Map()

  on(event: string, callback: EventCallback) {
    if (!this.events.has(event)) {
      this.events.set(event, [])
    }
    this.events.get(event)?.push(callback)
  }

  off(event: string, callback: EventCallback) {
    if (this.events.has(event)) {
      const callbacks = this.events.get(event)?.filter((cb) => cb !== callback)
      this.events.set(event, callbacks || [])
    }
  }

  emit(event: string, ...args: any[]) {
    this.events.get(event)?.forEach((callback) => callback(...args))
  }

  clear(event: string) {
    this.events.delete(event)
  }
}

export const eventBus = new EventBus()
