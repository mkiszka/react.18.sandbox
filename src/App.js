import logo from './logo.svg';
import './App.css';
import Note from './Note';
import { useReducer } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import NotesList from './NotesList';
import { v4 as uuid } from 'uuid';

const INITIAL_NOTES = { notes: [{ id: uuid(), title: 't1', description: 't2' }], currentNote: null }
const ADD_NEW_NOTE = 'addNewNote';
const DELETE_NOTE = 'deleteNote';
function noteReducer(prevState, action) {
  let notes;
  switch (action.type) {
    case ADD_NEW_NOTE:
      console.log(prevState);
      return { ...prevState, notes: [action.note, ...prevState.notes], };
    case DELETE_NOTE:
      console.log(prevState);
      return { ...prevState, notes: prevState.notes.filter((note) => note.id !== action.id), };
    default:
      return prevState;
  }
}
function App() {
  function handleAdd(dispatch) {

    let newNote = {
      id: uuid(),
      title: loremIpsum({ avgWordsPerSentence: 15, avgSentencesPerParagraph: 2, startWithLoremIpsum: false, random: true }),
      description: loremIpsum({ avgWordsPerSentence: 15, avgSentencesPerParagraph: 2, startWithLoremIpsum: false, random: true })
    }
    dispatch({ type: ADD_NEW_NOTE, note: newNote });
  }
  function handleDelete(dispatch, id) {  
    dispatch({ type: DELETE_NOTE, id: id })
  }

  const [notesList, noteListDispatch] = useReducer(noteReducer, INITIAL_NOTES);
  console.log('render', notesList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => { handleAdd(noteListDispatch) }}>Dodaj</button>

        <NotesList>
          {notesList?.notes.length > 0 ?
            notesList.notes.map((element) => <Note
                key={element.id}
                title={element.title}
                description={element.description}
                onDelete={() => handleDelete(noteListDispatch,element.id)} />
            ) : ""
          }
        </NotesList>


      </header>
    </div>
  );
}

export default App;
