

import React, { useState ,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { APIURL } from '../../envData';
import axios from 'axios';

function AllNews() {

    const [data,setData] = useState();
    const getData = async () => {
        try {
          // const response = await fetch(`${API_URL}/dayTour`);
          const response = await fetch(`https://newsbackend-two.vercel.app/getAllNews`);
          const d = await response.json();
          console.log(d);
          setData(d);
        } catch (e) {
          console.log(e);
        }
      };

      const deleteNews = async (itemId) => {
        await axios
          .delete(`${APIURL}/deletenews/${itemId}`)
          .then((res) => {
            console.log("Delete successfully");
            window.location.reload()

          })
          .catch((err) => {
            console.log("Delete Error");
          });
      };
      useEffect(()=>{
        getData()
      },[])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>عنوان الخبر</th>
          <th>صوورة الخبر</th>
          <th>محتوي الخبر</th>
          <th>حذف</th>
          <th>تعديل</th>
        </tr>
      </thead>
      <tbody>
        {
            data?.map((item)=>{
                return (
                <tr>
          <td>{item._id}</td>
          <td>{item.title}</td>
          <td><img src={item.imageURl} width="100"/></td>
          
          <td> <div style={{fontSize:"14px",fontWeight:'normal'}}
                        dangerouslySetInnerHTML={{
                          __html: item.newsContent,
                        }}
                      /></td>
          <td> <button className="btn btn-warning">
                        <Link to={`/updateNews/${item._id}`}>Update</Link>
                      </button></td>
          <td>
          <button
                        className="btn btn-danger"
                        onClick={() => deleteNews(item._id)}
                      >
                        Delete
                      </button>

          </td>
        </tr>
                )
            })
        }
        
        
      </tbody>
    </Table>
  );
}

export default AllNews;