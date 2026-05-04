import { z } from "zod/mini";

const envSchema = z.object({
  DISCORD_TOKEN: z.string(),
});

function loadEnv() {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    console.error("Invalid environment variables:");
    console.error(result.error);
    process.exit(1);
  }

  return result.data;
}

export const env = loadEnv();
