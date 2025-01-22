## FRACTION AI TESTNET BOT

## PREREQUISITE

- Git
- Node JS
- Wallet Funded with Eth Sepolia

## BOT FEATURE

- Multi Account 
- Support PK
- Proxy Support
- Agent Matchmarking Automation 


## SETUP & CONFIGURE BOT

### LINUX
1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/fraction-testnet-bot.git && cd fraction-testnet-bot
   ```
2. Install Dependencies & Setup Accounts
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure your bot configuration and proxy
   ```
   nano config/config.js
   nano config/proxy_list.js
   ```
5. To start the app run
   ```
   npm run start
   ```
   
### WINDOWS
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/fraction-testnet-bot.git
   ```
   and cd to project dir
   ```
   cd fraction-testnet-bot
   ```
3. Install Dependencies & Setup accounts
   ```
   npm install && npm run setup
   ```
5. Navigate to `fraction-testnet-bot` directory. 
6. Navigate to `accounts` and configure `accounts.js`.
7. Back to `fraction-testnet-bot` directory. 8. Navigate to `config` and configure `config.js` and `proxy_list.js` if you use proxy.
9. To start the app open your `Command Prompt` or `Power Shell` again and run
    ```
    npm run start
    ```

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
2. Start the bot

## NOTE

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.