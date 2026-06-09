export interface Meditation {
  id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  title: string;
  description: string;
  duration_min: number;
}
