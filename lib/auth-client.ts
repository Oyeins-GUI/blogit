import { createAuthClient } from "better-auth/react";

const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL;

if (!BETTER_AUTH_URL)
   throw new Error("Missing BETTER_AUTH_URL environment variable");

export const authClient = createAuthClient({
   baseURL: BETTER_AUTH_URL,
});
