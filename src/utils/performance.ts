export const reportWebVitals = (onPerfEntry?: (entry: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    }).catch(() => {
      // Gracefully handle if web-vitals is not available
    })
  }
}

export const logPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    reportWebVitals((metric) => {
      console.log(metric)
    })
  }
}