from flask import Flask, jsonify
import json, jwt, os, applemusicpy, pymongo
from datetime import datetime, timedelta

app = Flask(__name__)

with open("AuthKey_UUBY396XU6.p8", "r") as f:
        secret_key = f.read()
key_id = "UUBY396XU6"
team_id = "TD59JJQC5A"

def main():
    # Replace the uri string with your MongoDB deployment's connection string.
    conn_str = "mongodb+srv://admin:<password>@cluster0.bo38wra.mongodb.net/test"
    
    # set a 5-second connection timeout
    client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)
    try:
        print(client.server_info())
    except Exception:
        print("Unable to connect to the server.")



@app.route('/token', methods=['GET'])
def generate_jwt():
    # Read private key from file
    with open("AuthKey_UUBY396XU6.p8", "r") as f:
        private_key = f.read()

    # Define team ID and key ID
    team_id = "TD59JJQC5A"
    key_id = "UUBY396XU6"

    # Generate JWT Token
    jwt_token = jwt.encode(
        {
            "iss": team_id,
            "iat": datetime.utcnow(),
            "exp": datetime.utcnow() + timedelta(days=180),
        }, 
        private_key,
        algorithm="ES256",
        headers={
            "alg": "ES256",
            "kid": key_id
        })
    return jwt_token

# @app.route('/test', methods=['GET'])
# def test():
#     am = applemusicpy.AppleMusic(secret_key, key_id, team_id)
#     results = am.search('travis scott', types=['albums'], limit=5)
    
#     res = []
#     for item in results['results']['albums']['data']:
#         res.append(item['attributes']['name'])
    
#     return jsonify(res)

# @app.route('/test2', methods=['GET'])
# def test2():
#     am = applemusicpy.AppleMusic(secret_key, key_id, team_id)
#     mk.authorize()
#     p = am._call('GET', 'https://api.music.apple.com/v1/me/history/heavy-rotation', {})
#     return jsonify(p)


@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/signup', methods=['POST'])
def signup():
    return 'Signup'

if __name__ == '__main__':
    app.run(debug=True, port=3000)