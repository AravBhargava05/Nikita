from flask import Flask, render_template

app = Flask(__name__)

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
