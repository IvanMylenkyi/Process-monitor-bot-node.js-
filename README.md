# Process Monitor Discord Bot

## Overview

This Discord bot is designed to monitor a specific process running on a PC and notify a designated Discord channel when the process starts or stops. The bot runs periodically, checking the status of the process every 30 minutes.

## Features

- Monitors a specific process on a PC.
- Notifies a Discord channel when the process starts or stops.
- Runs on a schedule, checking process status every 30 minutes.
- Provides real-time updates to Discord users.

## Requirements

- Node.js installed on your system.
- Discord bot token (get it from the Discord Developer Portal).
- `.env` file with the Discord bot token and process name (`PROCESS_NAME`).

## Installation

1. Clone the repository:

   git clone https://github.com/IvanMylenkyi/Process-monitor-bot-node.js-
   cd repository
2. Install dependencies:

npm install
3. Configure environment variables:

Create a .env file in the root directory with the following content:

TOKEN=your_discord_bot_token_here
PROCESS_NAME=your_process_name_here
CHANNEL_ID = your_channel_id
Replace your_discord_bot_token_here with your actual Discord bot token, your_process_name_here with the name of the process you want to monitor and your_channel_id_here with the real your channel id.

4. Start the bot:

node bot.js
## Usage
The bot will automatically start monitoring the specified process upon startup.
It will check the status of the process every 30 minutes.
When the process starts or stops, it will send a message to the designated Discord channel.

## Contributors
 ### Ivan Mylenkyi

## License
This project is licensed under the MIT License - see the LICENSE file for details.
