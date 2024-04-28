// utils/db.js

import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

let cachedConnection: Connection | null = null;

export async function connectToDatabase(): Promise<Connection | null> {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!mongoose.connections[0].readyState) {
    cachedConnection = await mongoose.connect(MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }).then((m) => m.connection);
    return cachedConnection;
  }

  cachedConnection = mongoose.connections[0];
  return cachedConnection;
}
