import React, { useContext } from 'react'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from "axios"
import Maincontext from '../../context/context';

const Add = () => {
  const{filter,handleFilter,searchHandler,deleteHandler}=useContext(Maincontext)
    const formik = useFormik({
        initialValues: {
          title: '',
          desc: '',
          price: '',
        },
        onSubmit: (values,{resetForm}) => {
         if(!values.title || !values.desc || !values.price){
            toast.error("Zəhmət olmasa boşluqları doldurun")
            return;
         }
         axios.post("http://localhost:3006/exams",{...values}).then(res=>{
            console.log(res)
            resetForm();
            toast.success("Əlavə olundu")
         })
        },
      });
      return (
        <div>
 <form style={{paddingTop:'30px'}} onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="lastName">Desc</label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
          <label htmlFor="email">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">Submit</button>
        </form>



        <div>
          <input style={{marginLeft:'70%',marginBottom:'30px',width:'400px'}} placeholder='search product' onChange={(e)=>{
            searchHandler(e.target.value)
          }} type="text" />
      <table className="table table-striped">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Desc</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    
      {filter.map((item,index)=>{
         
          
            return(
                <tr key={index}>
                     <td style={{ padding: '15px' }}>{item._id.slice(0,5)}</td>     
                    <td>{item.title} </td>
                    <td style={{ padding: '15px',marginTop:'20px' }}>{item.desc}</td>
                    <td style={{ padding: '15px' }}>{item.price}</td>     
                    <td style={{ padding: '15px' }}> <button onClick={()=>{
                      deleteHandler(item._id)
                    }}>Delete</button> </td>                  
                    
                  
                    
                </tr>
            )
        })
      }
    
  </tbody>
</table>

    </div>




        </div>
       
      );
    };


export default Add