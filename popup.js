const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

document.addEventListener('DOMContentLoaded', async function () {
  const generateButton = document.getElementById('generateButton'); // Correct typo in variable name
  const copyButton = document.getElementById('copyButton'); // Correct typo in variable name

  if (generateButton) {
    generateButton.addEventListener('click', generateMail); // Fix typo in function name
  }
  if (copyButton) {
    copyButton.addEventListener('click', copyToClipboard);
  }
});

// Fix typo in function name and add missing 'await' before 'openai.Emails.create'
async function generateMail() {
  const userInput = document.getElementById("userInput").value;
  try {
    const response = await openai.Emails.create(userInput);
    const generatedMail = response.choices[0].text.trim();

    // Use 'value' property directly on the textarea
    document.getElementById("output").value = generatedMail;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    document.getElementById("output").value = "Error generating mail.";
  }
}

// Remove unnecessary async keyword and fix typo in function name
function copyToClipboard() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
}
