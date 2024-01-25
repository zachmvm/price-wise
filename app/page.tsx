import Searchbar from "@/components/Searchbar"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <section className="px-6 border-2 border-red-500 md:px-20">
        <div className="flex max-xl:flex-col">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Discover the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-served product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          HeroCarousel
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex -flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone', 'Book', 'Monitor'].map
          ((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home