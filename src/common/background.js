export function runOnInterval(runnable, intervalMs) {
  const id = setInterval(() => {
    if (!document.hidden) {
      runnable();
    }
  }, intervalMs);
  return () => clearInterval(id);
}
