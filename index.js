/** @jsx h */

import { h, render, Component } from 'preact';
// import 'preact/debug'
import { useState } from 'preact/hooks'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function BadUI () {
  const [input, setInput] = useState('')
  const [char, setChar] = useState('')
  const [alphabet, setAlphabet] = useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])

  const abc = alphabet.map(a => <option key={a} value={a}>{a}</option>)

  function randomise () {
    const char = shuffle(alphabet)[0]
    setInput(input + char)
  }

  function remove () {
    const thing = input.split("")
    const filtered = thing.filter(a => a.indexOf(char) === -1).join('')
    setInput(filtered)
  }

  return (
    <div>
      <input style={{margin: 2, padding: 5, fontSize: 22}} disabled value={input} />
      <div>
        <select style={{margin: 2, padding: 5}} onClick={setAlphabet(shuffle(alphabet))} onChange={e => setChar(e.target.value)}>
          {abc}
        </select>
        <button style={{margin: 2, padding: 5}} onClick={remove}>remove selected letter</button>
        <button style={{margin: 2, padding: 5}} onClick={() => setInput('')}>clear</button>
      </div>
      <div>
        <button style={{margin: 2, padding: 5}} onClick={randomise}>randomly select letter</button>
      </div>
    </div>
  )
}



// render an instance of Clock into <body>:
render(<BadUI />, document.getElementById('mount'));