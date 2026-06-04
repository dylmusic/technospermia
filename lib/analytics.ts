export const trackEvent = (eventName: string, params?: Record<string, string | number>) => {
  if (typeof window !== "undefined" && typeof (window as unknown as Record<string, unknown>).gtag === "function") {
    ;(window as unknown as { gtag: (cmd: string, name: string, params?: Record<string, string | number>) => void }).gtag("event", eventName, params)
  }
}
