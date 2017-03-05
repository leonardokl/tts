# TTS - Text to speech

Synthetize text to speech using the browser speechSynthesis

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

## Instaling

```
npm install -S tts
```

## Usage

``` javascript
// const tts = require('tts')
import tts from 'tts'

tts.speak('Hello World')
```

## Options

``` javascript
// default options
tts.speak('Hello World', { lang: 'en-US', pitch: 1, rate: 1})
```
