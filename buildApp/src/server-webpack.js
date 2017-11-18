const server = require('../../NeteaseCloudMusicApi/app');
const express = require('express');
const path = require('path');
module.exports = function (port, url) {
    server(port, express.static(path.join(__dirname, "www")));
}