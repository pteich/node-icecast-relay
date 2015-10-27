# Proof-of-concept Icecast relay server for NodeJS (ES2015/ES6 style)

Simple but working proxy that connects to an existing Icecast (or Shoutcast) stream and redistributes data to connected clients (mp3 only at the moment).
The incoming audio data is piped through Lame so you can transcode it if needed. The output is optionally saved into a file.

You can connect to the output of this script (default http://localhost:8000) with any music player capable of streaming data or any web browser that can play `audio/mp3` files.


This script uses ES2015/ES6 together with Babel (https://babeljs.io).

[![Code Climate](https://codeclimate.com/github/pteich/node-icecast-proxy/badges/gpa.svg)](https://codeclimate.com/github/pteich/node-icecast-proxy) [![Dependency Status](https://gemnasium.com/pteich/node-icecast-relay.svg)](https://gemnasium.com/pteich/node-icecast-relay) [![Circle CI](https://circleci.com/gh/pteich/node-icecast-proxy.svg?style=svg)](https://circleci.com/gh/pteich/node-icecast-proxy)


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
