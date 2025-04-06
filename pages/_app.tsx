import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavOffset from "../components/NavOffset";
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "production" && typeof window !== 'undefined') {
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
      <Navbar />
      <NavOffset child={<Component {...pageProps} />} />
      <Footer />
    </>
  );
}

export default MyApp;
