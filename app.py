from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask import Flask, send_from_directory
app = Flask(__name__)

CORS(app)

@app.route('/')
def index():
    return render_template('index.html', title="Home")

@app.route('/sketches')
def sketches():
    return render_template('sketches.html', title="Sketches")

@app.route('/about')
def about():
    return render_template('about.html', title="About")

@app.route('/contact')
def contact():
    return render_template('contact.html', title="Contact")

@app.route('/selectedworks')
def selectedworks():
    return render_template('selectedworks.html', title="Selected Works")

if __name__ == '__main__':
    app.run(debug=True)
