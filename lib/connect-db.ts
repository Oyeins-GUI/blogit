import { env } from "@/env";
import { MongoClient } from "mongodb";

export let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (env.NODE_ENV === "development") {
   // Prevent hot-reload issues in dev
   const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
   };

   if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(env.MONGODB_URI, {});
      globalWithMongo._mongoClientPromise = client.connect();
   }

   clientPromise = globalWithMongo._mongoClientPromise;
} else {
   client = new MongoClient(env.MONGODB_URI, {});
   clientPromise = client.connect();
}

export const db = (await clientPromise).db();
