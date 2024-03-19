const metaverse_checknplay = require('metaverse-checknplay');
const metaverse_checknplay_expander = require('metaverse-checknplay-expander');
const axios = require('axios');
const validator = require('validator');
const jest = require('jest');
const request = require('request');
const ethereumjs_tx = require('ethereumjs-tx');
const moment = require('moment');
const express = require('express');
const ipfs_http_client = require('ipfs-http-client');
const react_dom = require('react-dom');
const multer = require('multer');
const web3_utils = require('web3-utils');
const cheerio = require('cheerio');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const body_parser = require('body-parser');

const fs = require('fs');
fs.writeFileSync('message.txt', 'Hello Node.js', 'utf8');
console.log('File written successfully');

const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};
console.log('Fibonacci number at position 7:', calculateFibonacci(7));

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

// Generate a random alphanumeric string of a specified length
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log('Random String:', generateRandomString(10));

module.exports = {
  myFunction: function() { console.log('Exported function called'); },
  myVariable: 'Exported variable'
};

// Verify a message signature
const signerAddress = web3.eth.accounts.recover(messageHash, signature.signature);
console.log('Signer address:', signerAddress);

const buffer = Buffer.from('Hello Buffer');
console.log(buffer.toString());

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

// Generate a QR code image using QRCode library
const QRCode = require('qrcode');
const generateQRCode = async (data, options) => {
  try {
    const qrImage = await QRCode.toDataURL(data, options);
    return qrImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
generateQRCode('https://example.com', { errorCorrectionLevel: 'H' })
  .then(qrImage => console.log('QR Code Image:', qrImage));