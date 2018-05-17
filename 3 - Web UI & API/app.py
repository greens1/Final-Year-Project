# coding=utf-8
from flask import jsonify, request, render_template, Flask
from indicators import country_codes
from worldbank import findCountry

app = Flask(__name__)


# decorator - way to wrap a function and modifying its behaviour
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/population/')
def population():
    return render_template('population.html')

@app.route('/populationURL/', methods=["GET"])
def populationURL():

    country = request.args.get("country", None, type = str)
    year = request.args.get("year", -1, type=int)

    indicator = request.args.get("indicator", "Total", type=str)
    age = request.args.get("age", None, type=str)

    if year<1960 or year >2016 or country not in country_codes:
        return render_template('populationURL.html')

    results = findCountry(country, year, indicator, age)
    return jsonify (results)

@app.errorhandler(400)
def page_not_found(e):
    return render_template('400.html'), 400

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template('500.html'), 500


if __name__ == '__main__':
    app.run(debug=True)

