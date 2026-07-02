import Hero from '@/components/hero'
//import PostItem from './post-item'
import Talks from '@/components/talks'
import FeaturedProjects from '@/components/featured-projects'
import WidgetValues from '@/components/widget-values'
import WidgetVision from '@/components/widget-vision'
import WidgetBook from '@/components/widget-book'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'Home - Hon. Nnamdi Okoye Emmanuel',
  description: 'The People’s Senator',
}

export default async function Home() {
  // const allBlogs = getBlogPosts();

  // Sort posts by date
  // allBlogs.sort((a, b) => {
  //   return (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) ? -1 : 1
  // })

  return (
    <>
      <Hero />
      { /* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

        { /* Middle area */}
        <div className="grow">
          <div className="max-w-175">
            <div className="space-y-10">
              <Talks />
              <FeaturedProjects />

            </div>
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
    </>
  )
}
