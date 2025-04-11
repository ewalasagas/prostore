import ProductList from "@/components/shared/header/product/product-list";
import sampleData from "@/sample-data";

const Homepage = () => {
    return <>
        <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>
    </>;
};
 
export default Homepage;