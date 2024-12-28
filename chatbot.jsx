import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For triggering the swipe-in animation

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = { sender: "user", text: inputValue };
    setChatHistory((prev) => [...prev, newMessage]);
    setInputValue("");

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:7860/api/v1/run/bd9c2de4-7e3a-46d4-a0de-d550d4a0ae7e?stream=false",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer sk-BGIts-Qzs_qiarLdn25t__ck0IKwV3FbOb3pfjPXzng", // API Key
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input_value: inputValue,
            output_type: "chat",
            input_type: "chat",
            tweaks: { /* your tweaks here */ },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Log the full response to inspect it

      // Extract the correct message from the response
      const botMessage = {
        sender: "bot",
        text: data.outputs?.[0]?.outputs?.[0]?.results?.message?.text || "I couldn't understand your request.",
      };

      setChatHistory((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger the animation on component mount
  useEffect(() => {
    setIsVisible(true); // Start the swipe-in animation
  }, []);

  return (
    <div className="flex flex-col items-center justify-start p-4">
      {/* Chatbot container with animation */}
      <div
        className={`chatbot-container bg-secondary p-4 rounded-lg shadow-md w-[400px] sm:w-[400px] md:w-[400px] lg:w-[1200px] mb-2 transition-transform duration-2000 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Chat history */}
        <div className="chat-history bg-primary p-2 rounded-lg max-h-96 overflow-y-auto">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "text-right" : "text-left"} my-2`}
            >
              <p
                className={`p-2 inline-block rounded-lg ${
                  message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                }`}
              >
                {typeof message.text === "string" ? message.text : JSON.stringify(message.text)} {/* Ensure the text is rendered correctly */}
              </p>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="input-area flex mt-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow p-2 rounded-l-lg border border-gray-300 text-sm"
            placeholder="Tell me your expertise..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 rounded-r-lg text-sm"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
