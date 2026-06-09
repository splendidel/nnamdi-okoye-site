import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/public/images/hon-nnamdi-okoye-ikenga.jpeg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-full">
        <div className="pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="h1 font-aspekta mb-5">
              Hon. Nnamdi Okoye{' '}
              <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
                The People's
              </span>{' '}
              Senator.
            </h1>

            <p className="text-lg text-slate-500 pb-4 dark:text-slate-400">
              A New Generation of Leadership for Anambra Central
            </p>

            <p className="text-lg pb-6 text-slate-500 dark:text-slate-400">
              Hon. Nnamdi Emmanuel Okoye is an entrepreneur, philanthropist,
              <br /> and emerging political leader committed to transforming lives
              through <br /> purposeful leadership and service.
            </p>

            <Link className="pt-14 inline-block" href="/about">
              Read More
            </Link>
          </div>

          {/* Right Image */}
          <div className="shrink-0">
            <Image
              className="rounded-full" 
              src={HeroImage}
              width={300}
              height={300}
              priority
              alt="nnamdi-okoye"
            />
          </div>

        </div>
      </div>
    </section>
  )
}