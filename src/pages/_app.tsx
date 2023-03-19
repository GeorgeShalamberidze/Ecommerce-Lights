import * as React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../../config/theme";
import createEmotionCache from "../../config/createEmotionCache";
import "@/styles/globals.css";
import { ProductProvider } from "../context/ProductContext";
import Home from "./index";
import Layout from "@/components/Layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
