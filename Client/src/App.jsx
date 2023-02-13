import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
import axios from 'axios'

function App() {
  const baseUrl = 'http://localhost:3000/data';
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="App">
      {post.map((post) => {
        return <Card key={post.id} gender={post.gender} email={post.email} first_name={post.first_name}/>
      })}
    </div>
  )
}

export default App
