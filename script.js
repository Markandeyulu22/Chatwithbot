function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.querySelector(".chat-box");

    if (userInput.value.trim() !== "") {
        // Add the user's message to the chat box
        const userMessage = document.createElement("p");
        userMessage.classList.add("user-message");
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);

        // Clear the input field
        const userText = userInput.value.toLowerCase();
        userInput.value = "";

        // Generate a bot response
        const botMessage = document.createElement("p");
        botMessage.classList.add("bot-message");

        if (userText.includes("hello")) {
            botMessage.textContent = "Hi there! How can I assist you today?";
        } else if (userText.includes("help")) {
            botMessage.textContent = "I'm here to help! Please tell me what you need assistance with.";
        } else if (userText.includes("time")) {
            botMessage.textContent = "The current time is " + new Date().toLocaleTimeString() + ".";
        } else if (userText.includes("date")) {
            botMessage.textContent = "Today's date is " + new Date().toLocaleDateString() + ".";
        } else if (userText.includes("thank")) {
            botMessage.textContent = "You're welcome! Let me know if there's anything else I can help with.";
        }else if (userText.includes("what is your name")) {
                 botMessage.textContent = "generative bot.";
        }
            else if (userText.includes("what is upsc")) {
                     botMessage.textContent = "The Union Public Service Commission (UPSC) is India's central agency responsible for conducting prestigious exams for recruitment into various civil services, including the Indian Administrative Service (IAS), Indian Police Service (IPS), and Indian Foreign Service (IFS). Known for its rigorous selection process, the UPSC Civil Services Examination (CSE) is held in three stages: Preliminary, Mains, and Interview. The exam assesses candidates on diverse subjects and skills, aiming to recruit capable individuals for high-ranking government roles.";
            }else if (userText.includes("what is apsc")) {
                         botMessage.textContent = "The Assam Public Service Commission (APSC) is a state-level government agency in Assam, India, responsible for recruiting candidates for various administrative positions in the state's civil services. Like the UPSC at the national level, APSC conducts competitive exams to select individuals for roles such as Assam Civil Services (ACS), Assam Police Services (APS), and other positions in the state's public sector. The APSC exams typically consist of Preliminary, Mains, and Interview stages, focusing on assessing candidates' knowledge, analytical skills, and suitability for administrative duties within Assam.";
                }else if (userText.includes("what is ai")) {
                         botMessage.textContent = "Artificial Intelligence (AI) is a branch of computer science focused on creating machines and software capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding natural language, and recognizing patterns.AI is often categorized into two main types:1 Narrow AI (or Weak AI): Designed to perform a specific task, like image recognition, language translation, or driving a car. Examples include Siri, Google Translate, and recommendation algorithms.2 General AI (or Strong AI): A more advanced concept where a system would have human-level intelligence, able to perform a wide range of tasks and adapt to new situations autonomously.AI is used in various fields such as healthcare, finance, transportation, and entertainment, and it continuously evolves to improve efficiency and provide solutions to complex challenges.";
                }else if (userText.includes("what is a computer")) {
                         botMessage.textContent = "A computer is an electronic device that processes data to perform a wide range of tasks, from simple calculations to complex simulations. It takes in data (input), processes it using instructions from software (programs), and produces an output. Computers work through four main functions:\n\n                             Input: Receives data or instructions from devices like keyboards, mice, or sensors.\n                             Processing: Uses a central processing unit (CPU) or other processors to perform calculations or logical operations.\n                             Storage: Saves data temporarily (in memory) or permanently (on drives).\n                             Output: Displays results through screens, printers, speakers, etc.\n                             Computers range from powerful supercomputers to everyday devices like laptops and smartphones, and they are essential in almost every field today.";
                }else if (userText.includes("write a basic program of c")) {
                     botMessage.textContent = "#include <stdio.h>\n" +
                             "int main() {\n" +
                             "  printf(\"Hello, World!\\n\");\n" +
                             "  return 0;\n" +
                             "}";
    }else if (userText.includes("hii")) {
                     botMessage.textContent ="hello";
            }else if (userText.includes("define ml")){
                         botMessage.textContent ="Machine Learning (ML) is a subset of Artificial Intelligence (AI) that enables computers to learn from data and make decisions or predictions without being explicitly programmed. It involves algorithms that analyze and identify patterns in data, allowing systems to improve their performance over time as they are exposed to more data.\n\n ML is categorized into three types:\n\n                             Supervised Learning: The model is trained on labeled data (data with known outcomes) to make predictions.\n                             Unsupervised Learning: The model is given data without labels and must find patterns or structures on its own.\n                             Reinforcement Learning: The model learns by interacting with an environment and receiving feedback through rewards or penalties.                             ML is widely used in applications like speech recognition, image processing, recommendation systems, and autonomous vehicles.";
                }
         else {
            botMessage.textContent = "Apologies, I’m in the process of learning this. I’ll try to get it right soon!";;
        }
        

        // Append the bot response to the chat box
        chatBox.appendChild(botMessage);

        // Scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
