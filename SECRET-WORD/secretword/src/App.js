// React
import {useCallback, useEffect, useState} from 'react'

//data
import {wordsList} from './data/words'

//CSS
import './App.css';

//Component
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

const guessesQtd = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQtd)
  const [score, setScore] = useState(0)

  const pickwordAndCategory = useCallback(() => {
    // pick random category
    const categories = Object.keys(words);
    const category = 
    categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {category, word};
  }, [words])

  // Start the secrets game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // choose a word
    const { category, word } = pickwordAndCategory();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
    
  }, [pickwordAndCategory]);

  //process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || 
    wrongLetters.includes(normalizedLetter)
    ) {
      return;
    } 

    // push guessed letter remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)

    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //  check if guesses ended
  useEffect(() => {
    if( guesses === 0){
      // reset all states
      clearLetterStates();

      setGameStage(stages[2].name)
    }
  }, [guesses])
  
  // check win 
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log("length unique " + uniqueLetters.length);
    console.log("lenght guessed " + guessedLetters.length);

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));
      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame])
  
  //restart the secrets game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQtd);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && 
      <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
