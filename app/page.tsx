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
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-served product and growth analytics to help you convert, engage, and retain more.
            </p>

            Searchbar
          </div>

          HeroCarousel
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
      </section>
    </>
  )
}

export default Home