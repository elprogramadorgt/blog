
import Navbar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>




      <section className="flex items-center	flex-col">
        <h1 className="text-4xl font-bold text-slate-900">Bienvenidos a mi Blog :)</h1>
        <Image src="/images/logo2.webp" width={200} height={150} alt="Picture of the author"></Image>
        <p className="mt-4 text-gray-600">Ciberseguridad,  programación, bases de datos y cosas.</p>
      </section>

      {/* <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Article 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800">Read more</a>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Article 2</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800">Read more</a>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Article 3</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800">Read more</a>
            </div>
          </div>
        </section> */}


    </>
  )
}
