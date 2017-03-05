/* global SpeechSynthesisUtterance */

const speechSynthesis = window.speechSynthesis

const speak = (text, { lang = 'en-US', pitch = 1, rate = 1 } = {}) => {
  const voices = speechSynthesis.getVoices()
  const voice = voices.find(i => i.lang === lang)
  let utterThis = new SpeechSynthesisUtterance(text)

  if (!voice) throw Error(`lang ${lang} not found`)

  utterThis = Object.assign(utterThis, {
    voice,
    pitch,
    rate
  })

  speechSynthesis.speak(utterThis)
}

export default {
  speak
}
