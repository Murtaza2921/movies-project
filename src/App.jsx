import {useEffect} from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import {getApiConfiguration} from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/Home";


function App() {
  const dispatch = useDispatch();
const {url} = useSelector((state) => state.home);
console.log(url)
  useEffect(()=>{
    fetchApiConfig();
  }, [])
const fetchApiConfig = () =>{
  fetchDataFromApi('/configuration').then((res)=>{
    const url = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "original",
      profile: res.images.secure_base_url + "original",
    
    }
    console.log(res);
    dispatch(getApiConfiguration(url));
  })
}
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/:mediaType/:id" element={<Deatail/>}/>
      <Route path="/search/:iquery" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/> */}
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}
  
export default App
