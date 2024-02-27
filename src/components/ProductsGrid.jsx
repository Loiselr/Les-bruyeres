import { Link, useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  ;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product)=>{
        //const { title, price, image } = product.attributes;
        const { name, article_price, img } = product;
        return ( 
          <Link 
            key={product.id} 
            to={`/products/${product.id}`} 
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              {/*<img src={image} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />*/}
              <img src={img} alt={name} className="rounded-xl h-64 md:h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider"> 
                {/*{ title }*/}
                { name }
              </h2>
              <span className="text-secondary">
                {/* price/100 }€ */}
                { article_price }€ 
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;