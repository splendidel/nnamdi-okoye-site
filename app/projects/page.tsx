import { Metadata } from 'next'
import Gallery from '@/components/gallery'
import ProjectCard from '../project-card'
import WidgetVision from '@/components/widget-vision'
import WidgetValues from '@/components/widget-values'
import WidgetBook from '@/components/widget-book'

// import Icon01 from '@/public/images/project-icon-01.svg'
// import Icon02 from '@/public/images/project-icon-02.svg'
// import Icon03 from '@/public/images/project-icon-03.svg'
// import Icon04 from '@/public/images/project-icon-04.svg'
// import Icon05 from '@/public/images/project-icon-05.svg'
// import Icon06 from '@/public/images/project-icon-06.svg'
// import Icon07 from '@/public/images/project-icon-07.svg'
// import Icon08 from '@/public/images/project-icon-08.svg'

export const metadata: Metadata = {
  title: 'Projects - Hon Nnamdi Emmanuel Okoye',
  description: 'Projects',
}

export default function Projects() {


  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-175">

          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Leadership in Action</h1> 
            <p className='mb-12'>
              Explore moments from the campaign trail, community engagements, and our shared commitment to building a stronger, more prosperous Anambra Central.
            </p>

            {/* Page content */}

            <div className="space-y-10">
                <section>
                  {/* Gallery */}
                  <Gallery />
                </section>

            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-60 lg:w-75 shrink-0">
        <div className="space-y-6">

          <WidgetValues />
          <WidgetVision />
          <WidgetBook />

        </div>
      </aside>

    </div>
  )
}
