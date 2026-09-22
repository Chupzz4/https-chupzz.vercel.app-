'use client';

import { useEffect } from 'react';

// Logs Core Web Vitals to the console during development. Nothing is sent
// anywhere; layout.tsx only renders this when NODE_ENV is "development".
export function WebVitals() {
  useEffect(() => {
    // Console diagnostics only. In production the 'event' observer below ran
    // on every interaction and the logs served nobody.
    if (process.env.NODE_ENV !== 'development') return;
    // Send a simple performance mark to demonstrate tracking
    if ('PerformanceObserver' in window) {
      try {
        // Log basic Core Web Vitals to console
        console.log('📊 Web Vitals Monitoring Enabled');

        // Observe Largest Contentful Paint
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        // Observe First Input Delay
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              const delay = entry.processingEnd - entry.startTime;
              console.log('FID/INP:', delay);
            });
          });
          observer.observe({ entryTypes: ['first-input', 'event'] });
        }

        // Observe Layout Shift
        if ('PerformanceObserver' in window) {
          let clsScore = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const entryAny = entry as any;
              if (!entryAny.hadRecentInput) {
                clsScore += entryAny.value;
                console.log('CLS Update:', clsScore);
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
      } catch (error) {
        console.error('Error monitoring Web Vitals:', error);
      }
    }
  }, []);

  return null;
}
