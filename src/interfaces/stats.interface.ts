interface StatsPayload {
  id: number,
  created_at: string,
  updated_at: string,
  user_id: number,
  date: string,
  duration_min: number,
  feeling_calm: number,
  feeling_relax: number,
  feeling_focus: number,
  feeling_anxiety: number,
}

export interface StatsResponse {
  status: 'success' | 'error';
  message: string;
  data: {
    stat: StatsPayload;
  }
}

interface StatsAnalyticData {
  id: number,
  created_at: string,
  updated_at: string,
  user_id: number,
  date: string,
  duration_min: number,
  feeling_calm: number,
  feeling_relax: number,
  feeling_focus: number,
  feeling_anxiety: number,
}

export interface StatsAnalyticDataSummary {
  total_anxiety: number,
  total_calm: number,
  total_focus: number,
  total_minutes: number,
  total_relax: number
}

export interface StatsAnalyticDataResponse {
  status: 'success' | 'error';
  data: {
    stats: StatsAnalyticData[],
    summary: StatsAnalyticDataSummary,
  }
}