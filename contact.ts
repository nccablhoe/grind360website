import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Method Not Allowed" })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");
    
    if (!name || !email || !message) {
      return { 
        statusCode: 400, 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Missing required fields: name, email, and message." }) 
      };
    }

    // In a real app, you would send an email or save to a database here.
    // For this example, we just log it to the function logs.
    console.log(`New contact form submission from: ${name} (${email}). Message: ${message}`);
    
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Message received successfully!" }),
    };

  } catch (error) {
    console.error("Error parsing request body:", error);
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Invalid request body." })
    }
  }
};
