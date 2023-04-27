import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: <string>process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
  token: <string>process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
});
