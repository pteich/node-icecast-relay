# Proof-of-concept Icecast proxy for NodeJS (ES2015/ES6 style)

Simple but working proxy that connects to an existing Icecast (or Shoutcast) stream and redistributes data to connected clients.
The incoming audio data is piped through Lame so you can transcode it if needed. Mp3 only at the moment.

You can connect to the output of this script (default http://localhost:8000) with any music player capable of streaming data or any web browser that can play `audio/mp3` files.

## Config

There is one simple config file in `config/config.json` that should be pretty self explaining.

## TODO

- inject metadata in output stream if client supports it
Icecast uses a special protocol to embed metadata into its mp3 bit strom. Any metadata changes are detectet but not injected into the output stream.

- proxy multiple icecast mounts
- add support for aac
