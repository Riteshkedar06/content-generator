from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure the Google Generative AI API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-1.5-flash')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        target_audience = data.get('targetAudience')
        content_type = data.get('contentType')
        context = data.get('context', '')  # For specific contexts like topics or themes

        if not target_audience or not content_type:
            return jsonify({'error': 'Missing targetAudience or contentType'}), 400

        # Construct the prompt based on content type
        if content_type == 'blog':
            prompt = (
                f"Write a detailed blog post for {target_audience} on the topic of {context}. "
                "Include a catchy introduction, several informative sections with headings, and a strong conclusion. "
                "Ensure the tone is engaging and the content is well-researched."
            )
        elif content_type == 'email':
            prompt = (
                f"Compose a professional email for {target_audience} regarding {context}. "
                "Include a compelling subject line, a polite greeting, a concise and informative body, and a courteous closing. "
                "Make sure the email is clear and well-structured."
            )
        elif content_type == 'social':
            prompt = (
                f"Create a captivating social media post for {target_audience} about {context}. "
                "The post should be brief, engaging, and tailored for social media platforms. "
                "Use a friendly tone and include a call-to-action if applicable."
            )
        elif content_type == 'ad':
            prompt = (
                f"Generate an attention-grabbing advertisement for {target_audience} focused on {context}. "
                "The ad should be persuasive, highlight key benefits, and include a clear call-to-action. "
                "Ensure the language is compelling and designed to drive engagement."
            )
        else:
            return jsonify({'error': 'Unsupported contentType'}), 400

        # Generate content using the Gemini model
        response = model.generate_content(prompt)

        # Check if response has a 'text' attribute
        if hasattr(response, 'text'):
            content = response.text.strip()
        else:
            content = "Error: Unable to generate content."

        # Post-processing to ensure proper formatting
        refined_content = refine_content(content, content_type)

        return jsonify({'content': refined_content})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

def refine_content(content, content_type):
    """
    Refine the generated content based on its type.
    """
    # Example of post-processing based on content type
    if content_type == 'blog':
        # Ensure paragraphs are properly separated (you can add more sophisticated processing if needed)
        content = content.replace('\n\n', '<br><br>')

    elif content_type == 'email':
        # Add line breaks between different parts (subject, greeting, body, closing)
        content = content.replace('\n', '<br>')

    elif content_type == 'social':
        # Ensure post is concise and engaging (you might want to truncate long posts)
        if len(content) > 280:  # Example character limit for social media posts
            content = content[:277] + '...'

    elif content_type == 'ad':
        # Ensure the ad content is persuasive and includes a call-to-action
        if not content.lower().contains("call to action"):
            content += " Don't miss out! Act now!"

    return content

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
