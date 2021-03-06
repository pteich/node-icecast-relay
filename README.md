If you need a lightweight Icecast proxy without transcoding you could give my Node Icecast Proxy a try: https://github.com/pteich/node-icecast-proxy


# Proof-of-concept Icecast relay server for NodeJS (ES2015/ES6 style)

Simple but working proxy that connects to an existing Icecast (or Shoutcast) stream and redistributes data to connected clients (mp3 only at the moment).
The incoming audio data is piped through Lame so you can transcode it if needed. The output is optionally saved into a file.

You can connect to the output of this script (default http://localhost:8000) with any music player capable of streaming data or any web browser that can play `audio/mp3` files.


This script uses ES2015/ES6 together with Babel (https://babeljs.io).

[![Code Climate](https://codeclimate.com/github/pteich/node-icecast-proxy/badges/gpa.svg)](https://codeclimate.com/github/pteich/node-icecast-proxy) [![Build Status](https://semaphoreci.com/api/v1/projects/c175d2b7-851b-452d-9c7f-1e92d22004ff/583477/badge.svg)](https://semaphoreci.com/pteich/node-icecast-relay)


## Installation

You need a installed and recent version of NodeJS and npm. To install all dependencies run:
`npm install`

## Usage

To start this proxy server run:
`npm run start`

After that connect to `http://localhost:8000` with VLC or simply any modern web browser.

## Config

There is one simple config file in `config/config.json` that should be pretty self explaining.

## TODO

- inject metadata in output stream if client supports it
Icecast uses a special protocol to embed metadata into its mp3 bit strom. Any metadata changes are detectet but not injected into the output stream.

- proxy multiple icecast mounts
- add support for aac
