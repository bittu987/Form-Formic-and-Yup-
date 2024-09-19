import './App.css'
import photo from './assets/photo.jpg'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";



function App() {

  const validationSchemaforform = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(/regex@gmail\.com$/, "Email must be regex@gmail.com'")
      .required("Email is required"),
    password: Yup.string()
      .oneOf(['rishiME@199'], 'Password must be "rishiME@199"')
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is required")
      .required("Confirm Password is required"),
  });


  
  

  return (
    <>
      <div className='Main-container'>
        <div className='Form'>
          <h1 style={{fontSize:"21px",position:"relative",left:"20%",marginTop:"30px"}}>Welcome !</h1>
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchemaforform}
      onSubmit={(data) => {
        console.log("Form Submitted", data);
        alert("Form Submitted")
        // if(isValid && dirty){
        //   alert({data});
        // }else{
        //   alert("Form Not Submitted due to Detail Mismatch, Please enter the correct details");
        // }
        
      }}
    >
      {({ isValid, dirty }) => (
        
        <Form style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", gap:"17px"}}>
          
          <div style={{display:"flex", flexDirection:"column", border:"1px solid rgb(221, 221, 221)", width:"15rem", padding:"5px",borderRadius:"5px"}}>
            <label htmlFor="name" style={{fontSize:"11px",fontWeight:"600",color:"rgb(140, 117, 105)",letterSpacing:"0.7px"}}>NAME</label>
            <Field type="text" id="name" name="name" placeholder="Name"  style={{border:"none", padding:"8px",outline:"none" ,}}/>
            <ErrorMessage name="name" component="div" style={{ color: "#B22B27", fontSize:"13px" }} />
          </div>

        
          <div style={{display:"flex", flexDirection:"column", border:"1px solid rgb(221, 221, 221)", width:"15rem", padding:"5px",borderRadius:"5px"}}>
            <label htmlFor="email" style={{fontSize:"11px",fontWeight:"600",color:"rgb(140, 117, 105)",letterSpacing:"0.7px"}}>EMAIL</label>
            <Field type="email" id="email" name="email" placeholder="Email"  style={{border:"none", padding:"8px",outline:"none"}}/>
            <ErrorMessage name="email" component="div" style={{ color: "#B22B27", fontSize:"13px" }} />
          </div>

        
          <div  style={{display:"flex", flexDirection:"column", border:"1px solid rgb(221, 221, 221)", width:"15rem" , padding:"5px",borderRadius:"5px"}}>
            <label htmlFor="password" style={{fontSize:"11px",fontWeight:"600",color:"rgb(140, 117, 105)",letterSpacing:"0.7px"}}>PASSWORD</label>
            <Field type="password" id="password" name="password" placeholder="Password" style={{border:"none", padding:"8px",outline:"none"}}/>
            <ErrorMessage name="password" component="div" style={{ color: "#B22B27", fontSize:"13px" }} />
          </div>

          <div style={{display:"flex", flexDirection:"column", border:"1px solid rgb(221, 221, 221)", width:"15rem" , padding:"5px",borderRadius:"5px"}}>
            <label htmlFor="confirmPassword" style={{fontSize:"11px",fontWeight:"600",color:"rgb(140, 117, 105)",letterSpacing:"0.7px"}} >CONFIRM PASSWORD</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" style={{border:"none", padding:"8px",outline:"none"}} />
            <ErrorMessage name="confirmPassword" component="div" style={{ color: "#B22B27", fontSize:"13px" }} />
          </div>

         
          <div>
            <button type="submit" disabled={!(isValid && dirty)} style={{background:isValid&&dirty ? "lightgreen" : "rgb(204, 204, 204)",border:"none",color:"white",padding:"10px 30px 10px 30px",cursor:"pointer",borderRadius:"5px"}} >
              SIGN UP
            </button>
          </div>
        </Form>
      )}
    </Formik>

        </div>
        <div className='Pic'>
          <img src={photo} alt="Lapto Photo"  />
        </div>
      </div>
    </>
  )
}

export default App
