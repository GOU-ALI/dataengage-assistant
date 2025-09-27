import { GoogleGenAI } from "@google/genai";
import { LinkedInPost } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;

export const generateLinkedInPosts = async (): Promise<LinkedInPost[]> => {
  // Check API key at runtime, not at import time
  if (!API_KEY) {
    throw new Error("API key not found. Please add VITE_API_KEY to your .env file.");
  }

  try {
    console.log("Generating posts with Gemini API...");
    const genAI = new GoogleGenAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `Generate 2 distinct LinkedIn posts about Data Engineering in JSON format. 
    Format: [{"title": "short catchy title", "content": "120-200 words with engaging hook, informative body, and call-to-action", "hashtags": ["#tag1", "#tag2", "#tag3"]}]
    
    Topics can include: best practices, Big Data trends, tools like Spark/Kafka/Airflow, Cloud platforms, Data Lakehouse, MLOps, real-time processing, data quality, etc.
    
    Return only valid JSON array, no additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error("Invalid response format from Gemini API");
    }
    
    const posts: LinkedInPost[] = JSON.parse(jsonMatch[0]);
    
    // Basic validation
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error("Invalid response format");
    }

    console.log("Posts generated successfully");
    return posts;
    
  } catch (error) {
    console.error("Error generating LinkedIn posts:", error);
    throw new Error("Failed to generate content. Please check your API key and connection.");
  }
};