# RAG-Chatbot 🦜🔗
AI chatbots with Retrieval-Augmented Generation (RAG) capabilities for free, using Langflow and Ollama. Run large language models locally for privacy, efficiency, and full control, leveraging an interactive workflow for chatbot development.

## Credits 🤖
[![Build AI Chatbots (with RAG) for FREE using Langflow and Ollama (Run Models Locally)](https://www.youtube.com/watch?v=tVwdpQyjtOc.jpg)](https://www.youtube.com/watch?v=tVwdpQyjtOc) - **Leon van Zyl**
The base idea for this project was adapted from Leon van Zyl. While the original concept used as a foundation, modifications were made to suit the features of this personal chatbot.

## Demo 🎬
See how easy it is to create and deploy chatbots using Langflow and Ollama:

## Files 📄

**Abhijeet.txt:** Contains the data in which the chatbot has been trained on.

## Theory Insight 💡
### Query Workflow for Chatbot Interaction ✅
![langflow_1](https://github.com/user-attachments/assets/cdc0c3db-921d-4e98-8eb4-349f20de5d1b)

This workflow defines how user queries are processed and responded to by the system. Here’s the step-by-step explanation:

1. **Chat Input:** This node collects the user’s input (e.g., “Do you have a website?”).
2. **Prompt Node:** The input is passed to a prompt template that dynamically combines the query with contextual information (e.g., a predefined persona or knowledge base).
3. **Chroma DB:** This is a vector database that retrieves relevant information from the pre-ingested knowledge base (e.g., facts about Abhijeet).
4. **Data is retrieved** based on similarity to the user’s query.
5. **Parse Data:** The retrieved data is converted into a plain text format to make it consumable for the language model.
6. **Ollama Node:** The prompt, enriched with retrieved knowledge, is sent to Ollama’s local LLM (e.g., llama-2 or other supported models) for response generation.
7. **Chat Output:** The AI-generated response is displayed back to the user.

### Data Ingestion Workflow for Knowledge Base ✅
![langflow_2](https://github.com/user-attachments/assets/1d19ab34-4936-4fcd-a8f3-0d8e7cb357c0)

This workflow outlines how knowledge is pre-processed and ingested into the system. Here’s the step-by-step breakdown:

1. **File Node:** A file (Abhijeet.txt) containing the knowledge base is loaded into the workflow.
2. **Recursive Character Splitter:** The text is split into smaller, manageable chunks (e.g., 1000 characters with 200-character overlap) to ensure efficient embedding and retrieval.
3. **Ollama Embeddings Node:** The text chunks are processed using Ollama’s embedding model, converting them into vector representations. These embeddings represent the semantic meaning of the text for similarity-based retrieval.
4. **Chroma DB:** The embeddings are stored in Chroma DB, a vector database optimized for fast and accurate similarity search.
5. This allows for **quick retrieval** of relevant chunks during query processing.
6. **End Result:** The prepared database enables the chatbot to fetch relevant context dynamically, providing more accurate and informed responses.


## Installation 💻

To get started, ensure you have the following dependencies installed:

![installation](https://github.com/user-attachments/assets/4ea8f9d4-715d-42fc-8059-9ec70ad61272)

**UV’s** core advantage over pip is its speed. Benchmarks show that UV can handle dependency installations much faster 

*pip install uv*

*uv pip install langflow*

to install models which was **llama3** and **nomic-embed-text**

![image](https://github.com/user-attachments/assets/82de4ceb-2ea6-4019-bd7c-7e478074cfa8)

*langflow run*

![image](https://github.com/user-attachments/assets/658f2caa-5197-42a4-9933-808eaa7b276a)

## Key Functionality ⚙️

- **Local LLM Execution:** Models run entirely on your machine, eliminating reliance on cloud services.
- **RAG Pipeline:** Dynamically retrieve documents or data to enhance response quality.
- **Customizable UI:** Adjust the chatbot’s functionality and interface as needed.

## What is Langflow? 🔗
Langflow is a visual programming tool for building and orchestrating AI workflows. It allows users to design complex AI pipelines through an intuitive drag-and-drop interface, connecting components like chat inputs, vector databases, language models, and more. Langflow simplifies the creation of AI-powered applications, making it accessible even for non-programmers.

## What is Ollama? 🦙
Ollama is a platform that enables local execution of large language models (LLMs) on your machine. It allows developers to run advanced AI models without relying on cloud services, ensuring privacy, faster performance, and cost-efficiency. Ollama supports multiple models, including those optimized for tasks like embeddings and natural language generation.

## What is RAG (Retrieval-Augmented Generation)? 📦
Retrieval-Augmented Generation combines language model capabilities with a data retrieval mechanism to enhance responses. Instead of relying solely on pre-trained knowledge, RAG retrieves relevant data from databases or external sources in real-time which in this case is **Abhijeet.txt**, improving accuracy and context in generated outputs. This technique is widely used in chatbots and knowledge-based systems.

## What is an LLM? ⚛️
An LLM (Large Language Model) is a type of advanced artificial intelligence model designed to understand and generate human-like text. These models are trained on vast amounts of text data from books, websites, and other sources to learn patterns, language structures, and contextual relationships.
