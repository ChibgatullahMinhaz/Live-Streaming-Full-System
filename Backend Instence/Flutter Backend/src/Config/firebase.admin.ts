import admin from "firebase-admin";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Ensure the env variable exists
if (!process.env.FIREBASE_SERVICE_KEY) {
  throw new Error("FIREBASE_SERVICE_KEY is not defined in .env");
}

let serviceAccount;

try {
  // Decode Base64 and parse JSON
  const decoded = Buffer.from(process.env.FIREBASE_SERVICE_KEY, "base64").toString("utf-8");
  serviceAccount = JSON.parse(decoded);
} catch (err) {
  console.error(
    "Failed to parse FIREBASE_SERVICE_KEY from .env. Make sure it is Base64-encoded JSON.",
    err
  );
  process.exit(1);
}

// Initialize Firebase Admin only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `${serviceAccount.project_id}.firebasestorage.app`,
  });
  console.log("✅ Firebase Admin initialized successfully");
}

export const bucket = admin.storage().bucket();
export const db = admin.firestore();
export default admin;
