export default function Choose() {
    return(
         <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl text-blue-600 mb-4">⭐</div>
            <h3 className="font-semibold">Top Quality</h3>
          </div>
          <div>
            <div className="text-4xl text-blue-600 mb-4">💰</div>
            <h3 className="font-semibold">Affordable</h3>
          </div>
          <div>
            <div className="text-4xl text-blue-600 mb-4">🏆</div>
            <h3 className="font-semibold">Trusted</h3>
          </div>
          <div>
            <div className="text-4xl text-blue-600 mb-4">📞</div>
            <h3 className="font-semibold">Great Support</h3>
          </div>
        </div>
      </section>
    )
     
}