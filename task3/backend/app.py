from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)

CORS(app)  # Enable CORS for all routes
@app.route('/account', methods=['GET'])
def bank_account():
    bank_account = {
        "name": "Dr. Nilex Tietgione",
        "balance": 35000,
        "pending_charges": [
            12,
            14,
            -3,
            400,
            35
        ]
    }
    return jsonify(bank_account)

if __name__ == '__main__':
    app.run(debug=True)

