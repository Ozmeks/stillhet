export interface UserProfile {
  email: string,
  id: number,
  last_login_at: string,
  username: string,
};


export interface ProfileResponse {
  status: 'success' | 'error';
  data: {
    user: UserProfile,
  };
}
