"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

export default function LoginComponent() {
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=149802224999-soj66m2tbbofssufdm2j59te1ca3er5m.apps.googleusercontent.com&scope=profile email&redirect_uri=http://localhost:3000/auth/google/callback&access_type=offline`;

  const { data: session } = useSession();
  return (
    <>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/" })} />
      </div>
    </>
  );
}
