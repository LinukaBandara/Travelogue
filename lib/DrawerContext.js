"use client";

import { createContext, useContext, useState } from "react";

const DrawerContext = createContext(null);

export function DrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [destination, setDestination] = useState(null);

  function openDrawer(dest = null) {
    setDestination(dest);
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return (
    <DrawerContext.Provider value={{ isOpen, destination, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within DrawerProvider");
  return ctx;
}
