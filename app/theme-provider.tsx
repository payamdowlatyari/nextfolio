'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return( 
    
//     <NextThemesProvider {...props} attribute="class" defaultTheme="nord" data-theme="nord">
//       {children}
//     </NextThemesProvider>
//     )
// }

// import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <NextThemesProvider attribute="class" defaultTheme="nord">
        {children}
      </NextThemesProvider>
  );
}