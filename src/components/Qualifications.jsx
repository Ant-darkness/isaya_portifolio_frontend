export default function Qualifications({ qualifications = [] }) {

    return (
      <section className="py-32 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-5xl font-black mb-16 text-center">
            Qualifications
          </h2>
  
          <div className="space-y-8">
  
            {qualifications.length === 0 ? (
              <p className="text-center text-gray-400">
                No qualifications available
              </p>
            ) : (
              qualifications.map((q, index) => (
                <div
                  key={index}
                  className="p-8 rounded-3xl border border-white/10 bg-black/40"
                >
                  <h3 className="text-2xl font-bold">
                    {q.title}
                  </h3>
  
                  <p className="text-gray-400 mt-2">
                    {q.institution}
                  </p>
                </div>
              ))
            )}
  
          </div>
        </div>
      </section>
    );
  }
