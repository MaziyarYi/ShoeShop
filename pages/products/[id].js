export const getStaticPaths=async()=>{

    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()

    const paths=data.map(product=>{
        return{
            params:{id:product.id.toString()}
        }
    })


    return {
        paths:paths,
        fallback: false
    }
};
export const getStaticProps=async (context)=>{
    const id=context.params.id;
    const res=await fetch('https://fakestoreapi.com/products/'+id)
    const data=await res.json()

    return{
        props:{product:data}
    }

};

const Details=({product})=>{
    return(
            <>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                {/*<img ref={product.image}/>*/}
            </>
    )

}
export default Details;
