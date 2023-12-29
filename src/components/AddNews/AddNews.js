import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { APIURL } from '../../envData';
function AddNews() {
    // const [value, setValue] = useState('');
    // const [title, setTitle] = useState('');
    // const [image, setImage] = useState('');
    const [news,setNews] = useState({title:"",imageURl:"",newsContent:""});
    // const [content, setContent] = useState('');
    const handleContentChange = (value)=>{
        setNews({...news , newsContent:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios
            .post(`${APIURL}/addnews`, news)
            .then((res) => {
              console.log(res);
            //   programAddedNotify()
            window.location.reload()
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (e) {
          console.log("====================================");
          console.log(e);
          console.log("====================================");
        }
    
        console.log("====================================");
        console.log(news);
        console.log("====================================");
      };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>عنوان الخبر</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setNews({ ...news, title: e.target.value });}} placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>صورة الخبر</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setNews({ ...news, imageURl: e.target.value });}} placeholder="" />
      </Form.Group>
      <p>محتوي الخبر</p>
      <ReactQuill theme="snow" value={news.newsContent} onChange={handleContentChange} />

      <button
                        className="btn btn-info"
                        type="submit"
                        
                      >
                        Add News
                      </button>
        
      
    </Form>
  );
}

export default AddNews;