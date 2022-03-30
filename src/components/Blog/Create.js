import {db} from '../../components/Auth/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import {useState} from 'react'

function CreatePost({ onClose, open }) {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [content, setContent] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        content: content,
        author: author,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter task decription'
          value={content}></textarea>
        <button type='submit'>Create Post</button>
      </form> 
    </Modal>
  )
}

export default CreatePost