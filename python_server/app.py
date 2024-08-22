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

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        target_audience = data.get('targetAudience')
        content_type = data.get('contentType')
        context = data.get('context', '')

        if not target_audience or not content_type:
            return jsonify({'error': 'Missing targetAudience or contentType'}), 400
        prompt = f"Write a {content_type} for {target_audience} on the topic of {context}."

        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        candidates = response.candidates
        if candidates and candidates[0].content.parts:
            generated_text = "".join([part.text for part in candidates[0].content.parts])
        else:
            return jsonify({'error': 'Failed to generate content'}), 500

        return jsonify({'content': generated_text})
       

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

def format_content(content):
    """
    Format the content to preserve bold text and spacing.
    - Convert '*bold text*' to '<b>bold text</b>'
    - Preserve line breaks by replacing '\n' with '<br>'
    """
    # Convert markdown-like bold text to HTML bold tags
    content = content.replace('*', '<b>').replace('*', '</b>')
    
    # Preserve line breaks
    content = content.replace('\n', '<br>')

    return content

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
