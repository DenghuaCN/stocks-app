import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  }
}


let cached = global.mongooseCache


if (!cached) {
  cached = global.mongooseCache = {conn: null, promise: null}
}

// 防止next.js热重载多次连接数据库
export const connectToDatabase = async () => {
  if (!MONGODB_URI) throw new Error("MONGODB_URI must be set within .env file");

  // 如果缓存的连接存在，直接返回此链接
  if (cached.conn) return cached.conn;

  // 如果没有连接，则创建一个新的连接
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
  }

  // 等待连接成功
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  console.log(`Connected to database ${process.env.NODE_ENV} - ${MONGODB_URI}`);

}