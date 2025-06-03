import { create } from "zustand";

interface userState {
  userName: string;
  userPlan: string;
  userDurationPlan: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (by: boolean) => void;
  setUserName: (name: string) => void;
  setUserPlan: (plan: string) => void;
  setUserDurationPlan: (numOfDays: string) => void;
}

export const useUserStore = create<userState>()((set) => ({
  userName: "John Ramirez",
  userPlan: "Free Plan",
  userDurationPlan: "28",
  isLoggedIn: true, 
  setUserName: (name) => set(() => ({ userName: name })),
  setUserPlan: (plan) => set(() => ({ userPlan: plan })),
  setUserDurationPlan: (numOfDays) => set(() => ({ userDurationPlan: numOfDays})),
  setIsLoggedIn: (by) => set(() => ({ isLoggedIn: by })),
}));
