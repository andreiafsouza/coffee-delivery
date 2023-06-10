import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";

import { ProductProvider } from "./context/ProductProvider";
import { CartProvider } from "./context/CartProvider";
import { GeoLocationProvider } from "./context/GeoLocationProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GeoLocationProvider>
          <ProductProvider>
            <CartProvider>
              <Router />
            </CartProvider>
          </ProductProvider>
        </GeoLocationProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
