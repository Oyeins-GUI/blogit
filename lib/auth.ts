import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client, db } from "./connect-db";

export const auth = betterAuth({
   database: mongodbAdapter(db, { client }),
   emailAndPassword: {
      enabled: true,
   },
   socialProviders: {
      google: {
         clientId: "",
         clientSecret: "",
      },
   },
});
