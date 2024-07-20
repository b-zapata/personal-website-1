// pages/redirect.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect on the client side
    router.push("/");
  }, []);

  return null;
}

// Server-side redirect
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/",
      permanent: false, // Set to true if you want a 308 redirect, otherwise 307
    },
  };
}
