import { useState } from 'react';
import axios from 'axios';

// - author (string) - L’autore del post
// - title (string) - Il titolo del post
// - body (string) - Il testo del post
// - public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  function handleFormData(event) {
    const value =
      event.target.type === 'checkbox' ?
        event.target.checked : event.target.value;

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: value,
    }));
  };

  console.log(formData)

  return (
    <>
      <div className='container'>
        <form>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text"
              name='author'
              value={formData.author}
              onChange={handleFormData}
              placeholder='insert an author'
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text"
              name='title'
              value={formData.title}
              onChange={handleFormData}
              placeholder='insert a title'
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Text of Post</label>
            <input type="text"
              name='body'
              value={formData.body}
              onChange={handleFormData}
              placeholder='insert a text of post'
              className="form-control" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox"
              name='public'
              checked={formData.public}
              onChange={handleFormData}
              id='public'
              className="form-check-input" />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
}

export default App


// Oggi creeremo il nostro primo form multifield per inviare dati in POST ad un’API.

// Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog.

// I dati che il form dovrà inviare sono i seguenti:

// - author (string) - L’autore del post
// - title (string) - Il titolo del post
// - body (string) - Il testo del post
// - public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)

// L’endpoint a cui effettuare la chiamata POST è il seguente:
// https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts
// Questo endpoint, in caso di successo, vi restituisce i dati inviati. Stampateli in console per verificare di essere riusciti ad inviare correttamente tutto!
