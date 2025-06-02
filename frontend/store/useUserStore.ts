import { create } from "zustand";

interface userState {
  userName: string;
  userPlan: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (by: boolean) => void;
  setUserName: (name: string) => void;
  setUserPlan: (plan: string) => void;
}

export const useUserStore = create<userState>()((set) => ({
  userName: "John Ramirez",
  userPlan: "Free Plan",
  isLoggedIn: true, 
  setIsLoggedIn: (by) => set(() => ({ isLoggedIn: by })),
  setUserName: (name) => set(() => ({ userName: name })),
  setUserPlan: (plan) => set(() => ({ userPlan: plan })),
}));
