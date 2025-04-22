import React from "react";
import { useStore } from "../store/CreatZustand";

export default function Login() {
   const setLogin = useStore((state) => state.setLogin);
   
   
  return <div>Login</div>;
}
