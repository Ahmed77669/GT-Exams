import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../util/db";

const query = util.promisify(db.query).bind(db);

export const POST = async (req) => {
  try {
    // Parse the incoming JSON request
    const user = await req.json();
    
    // Check for missing fields in the request body
    if (!user.email || !user.name || !user.password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Use parameterized query to prevent SQL injection
    const sql = `INSERT INTO test.users (user_id, email, name, password, phone) 
                 VALUES (UUID(), ?, ?, ?, ?)`;

    const values = [user.email, user.name, user.password, user.phone || null];
    
    const results = await query(sql, values);

    if (results) {
      return new NextResponse(JSON.stringify({ message: "User created successfully", user }), { status: 201 });
    }
  } catch (error) {
    console.error("Error during user registration:", error.message);
    
    // Return a better error response format
    return new NextResponse(JSON.stringify({ error: "User registration failed", details: error.message }), { status: 400 });
  }
};
