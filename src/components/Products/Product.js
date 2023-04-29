import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";


const Product = ({onChange,onIncrement, onDecrement, onDelete, product}) => {
    return (
        <div className={styles.product}>
            <p>product name: {product.title} course</p>
            <p>product price: {product.price}</p>
            <span className={styles.value}>{product.quantity}</span>
            <input className={styles.input} type="text" onChange={onChange} value={product.title} />
            <button onClick={onIncrement} className={styles.button}>+</button>
            <button onClick={onDecrement} className={` ${styles.button} ${product.quantity === 1 && styles.remove}`}>{product.quantity >1 ? "-" : <BiTrash/>}</button>
            <button onClick={onDelete} className={styles.button}>Delete</button>
        </div>
    )
}
 
export default Product;