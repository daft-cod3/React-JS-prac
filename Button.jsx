

function Button(){

  const handleClick = (e) => e.target.textContent = "OUCH! Don't Click Me Again!"; 

  return(
    <button onDoubleClick={(e) => handleClick(e)}>
      Click Me
    </button>
  );
}

export default Button