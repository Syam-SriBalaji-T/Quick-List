
const Footer = ({len}) => {

  let message
  if(len > 1){
    message = "items"
  }
  else if(len === 1){
    message = "item"
  }
  else{
    message = "list empty"
  }

  return (
    <footer> {(len > 0) ? len : null} {message} </footer>  
  );
}

export default Footer;