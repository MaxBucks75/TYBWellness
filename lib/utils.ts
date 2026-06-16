
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * Combines clsx for conditional classes with tailwind-merge to handle conflicting utilities
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}