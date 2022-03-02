import "styles/globals.css";
import Layout from "@/components/layout";
import { BreakpointProvider } from "@/hooks/useBreakpoint";

const queries = {
  sm: "(max-width: 575px)",
  md: "(max-width: 1199px)",
};

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider queries={queries}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BreakpointProvider>
  );
}

export default MyApp;
