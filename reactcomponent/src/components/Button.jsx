function Button(){
  const sayHello=()=>{ alert("Hello Button")}
  return(
    <div>
    <h1>Hello I m button</h1>
    <button onClick={sayHello}>HelloButton</button>
    </div>
  );
}
 export default Button;