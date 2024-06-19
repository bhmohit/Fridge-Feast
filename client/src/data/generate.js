import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config()

const key = process.env.REACT_APP_API_KEY;

const genAI = new GoogleGenerativeAI(key);

const model = 'gemini-1.5-flash-001';

// Instantiate the models
const generativeModel = genAI.getGenerativeModel({
    model: model,
    generationConfig: {
        'maxOutputTokens': 8192,
        'temperature': 0.5,
        'topP': 0.95,
    },
    safetySettings: [
        {
            'category': 'HARM_CATEGORY_HATE_SPEECH',
            'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
            'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
            'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
            'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
            'category': 'HARM_CATEGORY_HARASSMENT',
            'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
        }
    ],
});

export default async function generateContent(ingredients, cuisine, prepTime, difficulty, servingSize) {
    const text1 = {
        text: `I have the following ingredients: ${ingredients}
    I want a recipe from the following cuisine: ${cuisine}
    The prep time must be: ${prepTime}
    The cooking difficulty must be: ${difficulty}
    The serving size is: ${servingSize}

    Format the response in a JSON output of the following structure:

    {
        name: \"\",
        ingredients: [],
        instructions: [],
        prepTime: \"\",
        servingSize: \"\",
    }`};
    const request = {
        contents: [
            { role: 'user', parts: [text1] }
        ],
    };

    const result = await generativeModel.generateContent(request);
    const response = result.response;
    return response.candidates[0].content.parts[0].text;
}