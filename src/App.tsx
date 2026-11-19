import './App.css'
import { Home } from './Home';
import { Routes, Route } from 'react-router';
import { Courses } from './Courses';
import { Bootcamps } from './Bootcamps';
import { Roadmaps } from './Roadmaps';
import { Blog } from './Blog';


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="bootcamps" element={<Bootcamps />} />
        <Route path="roadmaps" element={<Roadmaps />} />
        <Route path="blog" element={<Blog />} />

      </Routes>

    </>

  )
}

export default App