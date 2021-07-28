// import React from "react"
// import { useForm } from "react-hook-form";
// import vragen from "../vragen";
// import Entry from "./Entry";
// import App from "./App";
// 
// function Form(props) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm("");
//
//   const onSubmit = (data) => {
//   };
//
//
//   return(
//     <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
//       <input id="inputKlein" maxlength="1" style={{ color: errors?.antwoord? 'green' : 'null'}}  {...register("antwoord", { pattern: /[^d|t]/i, required: true})} />
//       {errors?.antwoord?.type === "pattern"}
//     </form>
//   )
// }
//
// export default Form
