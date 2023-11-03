from flask import Flask, request, jsonify
from decouple import config  # For working with environment variables
from telegram import Bot

app = Flask(__name__)



@app.route('/api/contact', methods=['POST'])
def main():
    print("helo")
    data = request.get_json()
    print(data)
    
    bot_token = config('BOT_TOKEN')
    print(bot_token)
    bot = Bot(token=bot_token)
    
    message = f"First Name: {data['firstName']}\n" \
              f"Last Name: {data['lastName']}\n" \
              f"Email: {data['email']}\n" \
              f"Subject: {data['subject']}\n" \
              f"Message: {data['message']}"
    
    updates = bot.get_updates()
    if updates:
        chat_id = updates[-1].message.chat_id
    
    
        # Send the data to the Telegram bot
        bot.send_message(chat_id=chat_id, text=message)
    
        # You can return a response to the frontend
    response = {'status': 'Data sent to Telegram bot'}
    print(response)
    return jsonify(response)



if __name__ == '__main__':
    app.run(debug=True)




