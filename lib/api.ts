import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  withCredentials: true,
});

// Simple health check function to decide between API vs mocks
export async function canUseApi(): Promise<boolean> {
  const url = (process.env.NEXT_PUBLIC_API_URL || "").trim();
  if (!url) return false;
  try {
    const res = await api.get("/health");
    return res.status >= 200 && res.status < 300;
  } catch {
    return false;
  }
}
