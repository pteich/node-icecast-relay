import http from "http"
import icecast from "icy"
import lame from "lame"

import config from "../config/config.json"

let clients = []

let decoder = lame.Decoder()
// Decoder receives format data before any data
decoder.on("format", (format) => {

    let encoder = new lame.Encoder({
        // input
        channels: format.channels, bitDepth: format.bitDepth, sampleRate: format.sampleRate,

        // output
        bitRate: config.output.bit_rate,
        outSampleRate: config.output.sample_rate,
        mode: lame.STEREO
    })

    encoder.on("data", (data) => {
        sendData(data)
    })

    decoder.pipe(encoder)
})

// start connection to Icecast server
icecast.get(config.icecast_url, (res) => {

    // receiving data from Icecast event
    res.on("data", (data) => {
        decoder.write(data)
    })

    // changing metadata event
    res.on("metadata", (metadata) => {
        let track = icecast.parse(metadata).StreamTitle
        console.log(track)
    })

})

// Listen on a web port and respond with a chunked response header.
let server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "audio/mpeg",
        "Transfer-Encoding": "chunked"
    })

    // Add the response to the clients array to receive streaming
    clients.push(res)
    console.log("Client connected -> streaming")
})

function sendData(data){
    clients.forEach((client) => {
        client.write(data)
    })
}

server.listen("8000", "127.0.0.1")
console.log("Server running at http://127.0.0.1:8000")
