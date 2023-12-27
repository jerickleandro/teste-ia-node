
const { GoogleGenerativeAI } = require("@google/generative-ai");



async function aiGenerate(req, res) {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Insert the word Foca replacing any word from a film title";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const resultFinal = { text };
    return res.json(resultFinal);
}

module.exports = aiGenerate;