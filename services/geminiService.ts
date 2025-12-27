
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

const KASHIKA_RESUME_DATA = `
Name: Kashika Chopra
Identity: MSBAIM Graduate Student at Purdue University.
Professional Experience: 3+ years of experience in consulting and cross-functional collaboration.
Mission: Transforming complex datasets into actionable insights to facilitate informed business decisions.
Top Skills: Data Storytelling, Consulting, Business Analytics, SQL, Python, Tableau.
Education: 
- Master of Science in Business Analytics and Information Management, Purdue University (2025-2026).
- Bachelor of Technology in Computer Science, UPES (2018-2022).
Certifications: Microsoft AI-900 (Azure AI Fundamentals), AWS CLF-C02 (Certified Cloud Practitioner).
Latest Activity: Completed portfolio website, Finished one semester at Purdue, Traveled to NY during Thanksgiving.
Personality: Passionate about continuous learning, strategic thinker, collaborative professional.
`;

export async function askKashikaAI(query: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the AI professional representative for Kashika Chopra's portfolio. 
        Answer questions about her background, studies at Purdue, and certifications.
        Use this data: ${KASHIKA_RESUME_DATA}.
        Tone: Highly professional, academic, yet approachable. Keep answers concise. 
        If specific data is missing, suggest her related skills or refer the user to her contact information.`
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently unavailable. Please check back later.";
  }
}
