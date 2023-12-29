import React,{useEffect, useState} from 'react'
import AllNews from '../AllNews/AllNews';
import AddNews from '../AddNews/AddNews';
import { Container } from 'react-bootstrap';
import SideBar from '../Sidebar/Sidebar';

function Home() {




  return (
    <>
    {/* <SideBar /> */}
    <Container>
        <AddNews />
        <AllNews />
    </Container>
    </>
  )
}

export default Home