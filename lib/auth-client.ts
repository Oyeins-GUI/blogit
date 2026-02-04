import { createAuthClient } from "better-auth/react";

const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL!;

export const authClient = createAuthClient({
   baseURL: BETTER_AUTH_URL,
});
