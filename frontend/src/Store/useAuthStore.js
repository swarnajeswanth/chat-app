import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSignup: false,
  isLoggedIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, isLoggedIn: true });
    } catch (error) {
      console.log("Error in CheckAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  loginHandler: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(res);
      set({ authUser: res.data, isLoggedIn: true });
      toast.success("login sucess");
    } catch (error) {
      toast.error(error.response.data.message);
      set({ authUser: res.data, isLoggedIn: true });
    }
  },
  signupHandler: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res);

      set({ authUser: res.data, isLoggedIn: true });
      toast.success("Signup Sucessfully");
    } catch (error) {
      toast.error(error.response.data.message);
      set({ authUser: res.data, isLoggedIn: true });
    }
  },
  logoutHandler: async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      console.log(res);
      set({ authUser: null, isLoggedIn: false });
      toast.success("Logout Sucessfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
