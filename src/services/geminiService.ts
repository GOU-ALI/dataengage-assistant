import { GoogleGenAI, Type } from "@google/genai";
import { LinkedInPost } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_API_KEY environment variable not set. Please create a .env file and add it.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: {
        type: Type.STRING,
        description: "A short, catchy title for the post proposal (e.g., 'The Rise of Data Lakehouses').",
      },
      content: {
        type: Type.STRING,
        description: "The full text of the LinkedIn post, including an engaging hook, informative body, and a clear call-to-action.",
      },
      hashtags: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "An array of 3 to 5 relevant hashtags, each starting with the '#' symbol (e.g., '#DataEngineering').",
      },
    },
    required: ["title", "content", "hashtags"],
  },
};

export const generateLinkedInPosts = async (): Promise<LinkedInPost[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate 2 distinct LinkedIn post proposals about Data Engineering. Topics can include best practices, Big Data trends, modern tools like Cloud, Spark, Kafka, or Data Lakehouse concepts. Each post must be between 120 and 200 words, written in a professional yet accessible style. The structure should be: 1. An engaging hook. 2. Informative content. 3. A clear conclusion or call-to-action. Also, provide 3 to 5 relevant hashtags for each post. Ensure the two proposals cover different topics or angles to provide a real choice.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    const posts: LinkedInPost[] = JSON.parse(jsonText);
    
    // Basic validation
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error("Invalid response format from Gemini API.");
    }

    return posts;
  } catch (error) {
    console.error("Error generating LinkedIn posts:", error);
    throw new Error("Failed to generate content. Please check your API key and connection.");
  }
};
