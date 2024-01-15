
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Maincontext from "./context/context";
import { useEffect, useState } from "react";
import swal from 'sweetalert2';
import axios from "axios"
import Detail from "./pages/Detail/Detail";
import Wishlist from "./pages/Wishlist/Wishlist";
import Add from "./pages/Add/Add";
import Home from "./pages/Home/Home";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import toast from 'react-hot-toast';
import Basket from "./pages/Basket/Basket";


function App() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")
  const[filter,setFilter]=useState([])
  const[wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  const [basket, setBasket]=useState(localStorage.getItem('basket')?JSON.parse(localStorage.getItem('basket')):[])
  const [homeCounter,setHomeCounter]=useState(localStorage.getItem("counter")? Math.max(0,parseInt(localStorage.getItem("counter"))):0)

  const addBasket=(item)=>{
    const target=basket.find(product=>product._id==item._id)
    if(!target){
      let newItem={... item, count:1,totalPrice:item.price}
      setBasket([...basket,newItem])
      setHomeCounter(homeCounter+1)
      localStorage.setItem('basket',JSON.stringify([...basket,newItem]))
      localStorage.setItem("counter",homeCounter+1)
      toast.success('Basketə əlavə olundu');
    }
    else{
      setHomeCounter(homeCounter+1)
      localStorage.setItem("counter",homeCounter+1)
      const newData={...item, count:target.count +1,totalPrice:item.price * (target.count+1)}
      setBasket([...basket.filter(element=>element._id !=item._id),newData])
      localStorage.setItem('basket', JSON.stringify([...basket.filter(element=>element._id != item._id),newData]))
      toast.success('Basketə əlavə olundu');
    }
  }
  
  const handleIncrease=(item)=>{
    let updatedata=[...basket]
    let target=updatedata.find(prod=>prod._id==item._id)
    setHomeCounter(homeCounter+1)
    localStorage.setItem("counter",homeCounter+1)
    target.count+=1
    target.totalPrice=item.price * target.count
    setBasket(updatedata)
    localStorage.setItem("basket",JSON.stringify(updatedata))

}


const handleDecrease = (item) => {
  let updatedata = [...basket];
  let target = updatedata.find(prod => prod._id === item._id);

  if (target.count > 1) {
    setHomeCounter(homeCounter - 1);
    localStorage.setItem("counter", homeCounter - 1);
    target.count -= 1;
    target.totalPrice = item.price * target.count;
    setBasket(updatedata);
    localStorage.setItem("basket", JSON.stringify(updatedata));
  }
   else {
    setHomeCounter(homeCounter - 1);
    localStorage.setItem("counter", homeCounter - 1);
    updatedata = updatedata.filter((prod) => prod._id !== item._id);
    setBasket(updatedata);
    localStorage.setItem("basket", JSON.stringify(updatedata));
  }
};



  const handleDelete=()=>{
    setWishlist([]);
    localStorage.removeItem("wishlist")
  }
  const deleteHandler=(id)=>{
    axios.delete(`http://localhost:3006/exams/${id}`).then(res=>{
      setData([...res.data])
      setFilter([...res.data])
    })
  }

  const addWishlist=(item)=>{
    const target=wishlist.find(wish=>wish._id==item._id)
    if(target){
      swal.fire({
        title: "xəta!",
        text: "Siz bu məhsulu wishlistə əlavə etmisiniz!",
        icon: "error"
      });
    }
    else{
      setWishlist([...wishlist,item])
      localStorage.setItem("wishlist",JSON.stringify([...wishlist,item]))
      toast.success("Add to Wishlist")
    }
  }
  const removeWishlist=(id)=>{
    const item=wishlist.find(item=>item._id==id)
    wishlist.splice(wishlist.indexOf(item),1)
    setWishlist([...wishlist])
    localStorage.setItem("wishlist",JSON.stringify([...wishlist]))
  }

  

  const searchHandler=(searchValue)=>{
    if(searchValue){
      setFilter([...data.filter(item=>item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
    }
    else{
      setFilter([...data])
    }
  }
  const handleFilter=()=>{
    setFilter([...data.sort((a,b)=>b.price-a.price)])
  }
  useEffect(()=>{
    axios.get("http://localhost:3006/exams").then(res=>{
      setData(res.data)
      setFilter(res.data)
      setLoading(false)
    }).catch(error=>{
      setLoading(false)
      setError(error)
    })

  },[])
  
  const datas={
    data,setData,
    loading,setLoading,
    error,setError,
    filter,setFilter,
    wishlist,setWishlist,
    handleFilter,searchHandler,
    removeWishlist,addWishlist,
    handleDelete,deleteHandler,
    addBasket,handleDecrease,
    handleIncrease,basket,homeCounter


  }
  return (
    <Maincontext.Provider value={datas}>
    
     <BrowserRouter>
     <Header/>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/wishlist"element={<Wishlist/>} />
    <Route path="/basket"element={<Basket/>} />
    <Route path="/:id" element={<Detail/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </Maincontext.Provider>
  
  )
  }
export default App;
