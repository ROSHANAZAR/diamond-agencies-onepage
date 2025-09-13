
export default function Products(){
  return (
          <section id="collections" className="py-20 bg-gray-50 scroll-mt-10 md:scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <img src="/KAG.jpg" alt="Floor Tiles" className="rounded mb-4" />
       
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <img src="/GC.png" alt="Wall Tiles" className="rounded mb-4" />
             
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <img src="/sparrow.jpg" alt="Bathroom" className="rounded mb-4" />
             
            </div>
          </div>
        </div>
      </section>
  )
}
