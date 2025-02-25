import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/GlobalStyle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavOffset from "../components/NavOffset";
import { NuqsAdapter } from "nuqs/adapters/next/pages";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "production") {
    console.log(`
            Hungry? Grab a banana!
  
   _
  //\\
  V  \\
   \\  \\_
    \\,'.\`-.
     |\\ \`. \`.
     ( \\  \`. \`-.                        _,.-:\\
      \\ \\   \`.  \`-._             __..--' ,-';/
       \\ \`.   \`-.   \`-..___..---'   _.--' ,'/
        \`. \`.    \`-._        __..--'    ,' /
          \`. \`-_     \`\`--..''       _.-' ,'
            \`-_ \`-.___        __,--'   ,'
               \`-.__  \`----"""    __.-'
  hh                \`--..____..--'
  
    `);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NuqsAdapter>
          <GlobalStyle />
          <Navbar />
          <NavOffset child={<Component {...pageProps} />} />
          <Footer />
        </NuqsAdapter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
