import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { APIURL } from '../../envData';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';

function UpdateNews() {

  const { id } = useParams();

  const [data,setData] = useState();

  const handleContentChange = (value)=>{
    setData({ ...data, newsContent: value });
  }
  const getItemById = async () => {
    try {
      // const response = await axios.get(`${API_URL}/dayTour/${id}`);
      const response = await axios.get(
        `${APIURL}/getNews/${id}`
      );
      const data= response.data;
      console.log(data);
      setData(data);
      
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }

    // console.log(data);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        // .patch(`${API_URL}/dayTour/${id}`, data)
        .patch(`${APIURL}/updateNews/${id}`, data)
        .then((res) => {
          console.log(res);
          // dayTourNotify();
          // getItemById();
          window.location.href = "/"
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  };

  useEffect(()=>{
    getItemById()
  },[])
  return (
    <Form className="main-form" onSubmit={(e) => handleSubmit(e)}>
    <div className="full-form">
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Control
            value={data?.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
            type="text"
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Control
            value={data?.imageURl}
            onChange={(e) => {
              setData({ ...data, imageURl: e.target.value });
            }}
            type="text"
            placeholder="image"
          />
        </Form.Group>
        <ReactQuill
            value={data?.newsContent}
            onChange={handleContentChange}
          />
        <Button variant="primary" type="submit">
          Update New
        </Button>

    </div>
  </Form>
  )
}

export default UpdateNews