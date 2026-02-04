import z from "zod";

const isCI = process.env.CI === "true";

const envSchema = z.object({
   NODE_ENV: z.enum(["development", "production", "test"]),
   BETTER_AUTH_URL: z.url(),
   BETTER_AUTH_SECRET: z.string(),

   MONGODB_URI: z.string(),
   NEXT_PUBLIC_BASE_URL: z.url(),
});

let env: z.infer<typeof envSchema>;

if (isCI) {
   env = {} as never;
} else {
   const parsed = envSchema.safeParse(process.env);

   if (!parsed.success) {
      const tree = z.treeifyError(parsed.error);
      console.error("❌ Invalid environment variables:");
      console.dir(tree, { depth: null });
      throw new Error("Invalid environment variables");
   }

   env = parsed.data;
}

export { env };
