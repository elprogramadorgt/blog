import Navbar from "@/components/NavBar";
import Image from 'next/image'

export default function About() {

    return <>
        <Navbar></Navbar>
        <main className="container mx-auto px-4 py-8 flex-grow">
            <section className="flex items-center	flex-col">
                <h1 className="text-4xl font-bold text-slate-900">Hallo soy Edu :)</h1>
                <Image src="/images/logo2.webp" width={200} height={150} alt="Picture of the author"></Image>
                <p className="mt-4 text-gray-600">
                    Streamer de Twitch, FullStack Developer en technologias basadas en Javascript.


                </p>
                <p className="mt-4 text-gray-600">

                    Espero aprendas mucho de mis experiencias y te ayuden a mejorar cada dia!
                </p>
            </section>

        </main>
    </>
}