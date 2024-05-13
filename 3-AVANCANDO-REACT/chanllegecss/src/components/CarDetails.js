import styles from './CarDetails.module.css'

const CarDetails = ({brand, color, km}) => {
  return (
    <div>
      <ul className={styles.ul_car}>
        <li className={styles.brand_car}>Modelo: {brand}</li>
        <li className={styles.color_car}>Cor: {color}</li>
        <li className={styles.km_car}>KM: {km} KM/H</li>
      </ul>
    </div> 
  )
}

export default CarDetails