import Products from "@/components/layout/Products"
import Banner from "@/components/ui/Banner"

const page = () => {
  return (
    <div>
        <Banner 
          title="Our Products"
          subtitle="Discover Our Collection"
          description="Browse through our carefully curated selection of products"
        />
        <Products/>
    </div>
  )
}

export default page
