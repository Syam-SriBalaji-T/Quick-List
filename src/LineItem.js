import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({i, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={i.id}>    
        <input 
            type="checkbox" 
            onChange={() => handleCheck(i.id)}
            checked={i.checked}  
        />
        <label 
            onDoubleClick={()=>handleCheck(i.id)}
            style={(i.checked)?{textDecoration: 'line-through'}:{textDecoration: 'none'}}>{i.item}
        </label>
        <FaTrashAlt 
            role="button"
            tabIndex="0"
            onClick={()=> handleDelete(i.id)}
            aria-label={`Delete ${i.id}`}
        />
    </li>
  )
}

export default LineItem