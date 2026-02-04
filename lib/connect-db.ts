import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Missing MONGODB_URI environment variable");

export let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
   // Prevent hot-reload issues in dev
   const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
   };

   if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(MONGODB_URI, {});
      globalWithMongo._mongoClientPromise = client.connect();
   }

   clientPromise = globalWithMongo._mongoClientPromise;
} else {
   client = new MongoClient(MONGODB_URI, {});
   clientPromise = client.connect();
}

export const db = (await clientPromise).db();
