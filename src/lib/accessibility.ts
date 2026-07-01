// Accessibility utilities for WCAG 2.1 AA compliance
import React from 'react';

export const a11y = {
  // Skip link for keyboard navigation
  skipLink: {
    className: "absolute left-0 top-0 -z-50 rounded bg-ink px-6 py-3 text-white focus:z-50",
    href: "#main-content",
    text: "Skip to main content"
  },

  // Focus management
  setFocusToElement: (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  // Announce to screen readers
  announce: (message: string, priority: "polite" | "assertive" = "polite") => {
    const announcement = document.createElement("div");
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-live", priority);
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  },

  // Create accessible button
  buttonProps: (label: string, onClick?: () => void) => ({
    "aria-label": label,
    onClick,
  }),

  // Form field helper
  createFormField: (
    name: string,
    label: string,
    required: boolean = false,
    type: string = "text"
  ) => ({
    name,
    id: `field-${name}`,
    type,
    "aria-label": label,
    "aria-required": required,
  }),

  // Link props with security
  secureLinkProps: (url: string, external: boolean = false) => ({
    href: url,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
  }),

  // Heading level management
  getHeadingLevel: (index: number): 1 | 2 | 3 | 4 | 5 | 6 => {
    const level = Math.min(index + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6;
    return level;
  },
};

// CSS utilities for accessibility
export const a11yCss = {
  srOnly: "absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 border-0",
  focusVisible:
    "focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-ink rounded",
  focusInset:
    "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan rounded",
};

// Semantic HTML5 heading helper - returns tag name, not JSX
export const getHeadingTag = (
  level: 1 | 2 | 3 | 4 | 5 | 6
): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" => {
  const headings: Record<number, "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  };

  return headings[level];
};
