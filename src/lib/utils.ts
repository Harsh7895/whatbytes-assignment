import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(dateInput: Date | string): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date provided");
  }

  const day = date.getDate(); // Day of the month
  const year = date.getFullYear(); // Full year
  const month = date.toLocaleString("default", { month: "long" }); // Full month name

  return `${day} ${month} ${year}`;
}


