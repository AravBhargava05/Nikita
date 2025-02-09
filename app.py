from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask import Flask, send_from_directory
app = Flask(__name__)
CORS(app)

# Homepage route
@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
