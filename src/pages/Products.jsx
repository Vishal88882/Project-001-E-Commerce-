
import { useContext, useEffect , useState } from "react"
import Card from "../components/Card";
import SearchFilter from "../components/SearchFilter";
import { ThemeContext } from "../context/ThemeContext";

 

const Products = () => {
  const [Array, setArray] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [Input, setInput] = useState("");
  const [Category, setCategory] = useState("all");
  const [Sort, setSort] = useState(null);
  const {theme} = useContext(ThemeContext);
  const ProductsApi = async () => {
    try {
       setLoading(true);
    const Response = await fetch('https://dummyjson.com/products?limit=180');
    const Data = await Response.json();
    setArray(Data.products);
  }
  catch (Error) {
   setError(true);
  }
  finally {
    setLoading(false);
    setError(false);

  }
  }
  useEffect(() => {
    ProductsApi();
  } , [] );

  const FilteredProducts = Array.filter((item) => {
    const CategoryFilter = Category === "all" ||  Category === item.category;
    const SearchFilter = item.title.toLowerCase().includes(Input.trim().toLowerCase());
    return CategoryFilter && SearchFilter;
  })
  .sort((a , b) => {
   if (Sort === "low") {
    return a.price - b.price;
   }
   if (Sort === "high") {
    return b.price - a.price;
   }
   return 0 ;
  })

  const Categories = ["all" , ...new Set(Array.map((item) => item.category))];

  return (
    <div>
      {
        Loading && (
  <div className="min-h-screen flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
)}
       {
        Error && <div className='min-h-screen text-black font-serif flex justify-center items-center '> 
          <h1 className="text-red font-4xl ">API PROBLEM 404</h1>
        </div>
      }
      <div>
        <SearchFilter Sort = {Sort} setSort = {setSort} Categories = {Categories} Input = {Input} setInput = {setInput} Category = {Category} setCategory = {setCategory}  />
      </div>
        {
        ! Loading && !Error &&  <div className='min-h-screen text-black font-serif grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-6 my-4 gap-4 '> 
          {
            FilteredProducts.map(({id , title , description , category , price , rating, thumbnail}) => {
              return (
               <Card
               rating= {rating}
                key = {id}
                title = {title}
                price = {price}
                description = {description}
                thumbnail = {thumbnail}
                id = {id}
                category = {category}
               />
               )
            })
          }
        </div>
      }
      </div>
  )
}

export default Products