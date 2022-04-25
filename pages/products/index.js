import styles from '../../styles/Products.module.css'
import Link from "next/link";

export const getStaticProps=async ()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data= await res.json()
    return{
        props:{products:data}
    }
}

export default function products({products}) {
    return (
        <>
            <div>
                <h1>Hello</h1>
                {products.map(product=>(
                    <Link href={"/products/"+product.id} key={product.id}>
                        <a className={styles.single}>
                            <h3>{product.title}</h3>
                        </a>
                    </Link>

                ))}
            </div>
        </>
    )
}
