import SliderWisata from "../component/SliderWisata"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Wisata(){
const [utama, setUtama] = useState([])

useEffect(() => {
axios.get('https://api.sheety.co/9cac24de8b1458fc4bb1ce50268083e5/databaseWisata/sheet1')
.then(response => {
    const data = response.data.sheet1
    const utamas = Object.values(data)
    const filterUtama = utamas.filter(dataa => dataa.utama == 1);
    setUtama(filterUtama)
})
},[])

    return(
        <>
<div className="section m-3 p-3">
  <div className="container">
  <div className="justify-content-center mb-5">
    <p className="text-center">Lorem ipsum dolor sit amet consectetur. At eget gravida amet sollicitudin elementum eget. Magna posuere mattis sem netus. 
        Lacus commodo duis enim duis odio vitae eu quis. Purus tellus id mauris nunc in senectus massa amet elementum.</p>
        <h4 className="mt-5 fw-bold text-center">Destinasi Utama di Nusa Tenggara Timur</h4>  
  </div>
  <div className="mt-5">
  <SliderWisata data={utama}/>
  </div>
  <p className="mt-5 mb-5 text-center">Nikmati juga pesona wisata lainnya  dari berbagai pelosok 
  daerah yang tersebar di Nusa Tenggara Timur</p>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
    <Link to={`/wisata/kategori/${'alam'}`} className="col">
    <div class="card m-2">
    <img className="rounded card-img-top" src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/destinasi/labuan-bajo/thumbnail.jpg'/>
    <div className="bottom-left fw-bold display-7"
    style={{color:'white'}}>Wisata Alam</div>
    </div> 
    </Link>

    <Link to={`/wisata/kategori/${'budaya'}`} className="col">
    <div class="card m-2">
    <img className="rounded card-img-top" src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/3-destinasi-wisata-di-ntt-yang-wajib-masuk-bucket-list/wae-rebo.jpg'/>
    <div className="bottom-left fw-bold display-7"
    style={{color:'white'}}>Wisata Budaya</div>
    </div> 
    </Link>

    <Link to={`/wisata/kategori/${'buatan'}`} className="col">
    <div className="col">
    <div class="card m-2">
    <img className="rounded card-img-top" src='https://i.ibb.co/LPfK0R3/tamnos.jpg' style={{width:'100%'}}/>
    <div className="bottom-left fw-bold display-7"
    style={{color:'white'}}>Wisata Buatan & Bangunan Bersejarah</div>
    </div> 
    </div>
    </Link>

    <div className="col">
    <div class="card m-2 img-thumbnail">
    <img className="rounded card-img-top" src='https://i.ibb.co/h9bg13c/b-3.jpg' style={{width:'100%'}}/>
    <div className="bottom-left fw-bold display-7"
    style={{color:'white'}}>Event Khusus Wisata</div>
    </div> 
    </div>
  </div>
    </div>
    </div>  
        </>
    )
}