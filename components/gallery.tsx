'use client'

import { useState } from 'react'
import Image from 'next/image'

import Gal01 from '@/public/images/nnamdi-okoye-adc-rally.jpeg'
import Gal02 from '@/public/images/nnamdi-okoye-childrens-day.jpeg'
import Gal03 from '@/public/images/hon-nnamdi-okoye-with-people.jpeg'
import Gal04 from '@/public/images/hon-nnamdi-okoye-manifest.jpeg'
import Gal05 from '@/public/images/hon-nnamdi-okoye-campaign-banner.jpeg'
import Gal06 from '@/public/images/hon-nnamdi-okoye-bill-poster.jpeg'
import Gal07 from '@/public/images/nnamdi-okoye-campaign-poster.jpeg'
import Gal08 from '@/public/images/hon-nnamdi-okoye-campaign.jpeg'
import Gal09 from '@/public/images/nnamdi-okoye-in-event.jpeg'
import Gal10 from '@/public/images/hon-nnamdi-okoye-sitting.jpeg'
import Gal11 from '@/public/images/hon-nnamdi-okoye-with-political-leader.jpeg'
import Gal12 from '@/public/images/hon-nnamdi-okoye-with-political-mentor.jpeg'
import Gal13 from '@/public/images/hon-nnamdi-okoye-ikenga.jpeg'
import Gal14 from '@/public/images/hon-nnamdi-okoye-emmanuel.jpeg'
import Gal15 from '@/public/images/nnamdi-okoye-campaign-cap.jpeg'
import Gal16 from '@/public/images/nnamdi-okoye-tshirt.jpeg' 
import Gal17 from '@/public/images/nnamdi-okoye.jpeg'
import Gal18 from '@/public/images/nnamdi-okoye-with-community-people.jpeg'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [ Gal15, Gal16, Gal01, Gal02, Gal03, Gal04, Gal05, Gal06, Gal07, Gal08, Gal09, Gal10, Gal11, Gal12, Gal13, Gal14, Gal17, Gal18]

  return (
    <section>
      {/* <h2 className="font-aspekta text-xl font-[650] mb-5">
       Gallery
      </h2> */}

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image.src)}
            className="group cursor-pointer relative aspect-video rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={image}
              alt={`Campaign ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    {/* Close Button */}
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="absolute top-4 right-4 z-60 text-white text-3xl leading-none hover:opacity-70"
      aria-label="Close image"
    >
      ×
    </button>

    {/* Image Container */}
    <div
      className="relative flex items-center justify-center w-full h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={selectedImage}
        alt="Campaign"
        width={2000}
        height={2000}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        priority
      />
    </div>
  </div>
)}
    </section>
  )
}