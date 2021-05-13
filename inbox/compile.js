const path = require("path");
const fs = require("fs");
const solc = require("solc");
// const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require("constants");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];
