"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,      // Scroll ki smoothness (jitna kam, utna smooth)
        duration: 1.2,   // Animation ka time
        smoothWheel: true 
      }}
    >
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}