import type { Metadata } from 'next'
import Image from 'next/image'
import WidgetValues from '@/components/widget-values'
import WidgetSponsor from '@/components/widget-vision'
import AboutImg from '@/public/images/hon-nnamdi-okoye-emmanuel.jpeg'
import Experience from '@/components/experience' 
import WidgetBook from '@/components/widget-book'

export const metadata: Metadata = {
  title: 'About - Nnamdi Okoye',
  description: 'Learn more about Hon. Nnamdi Emmanuel Okoye',
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-full">

          <section>
            { /* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. I'm Hon.Nnamdi Emmanuel  Okoye (Ikenga) </h1>

              <div className="relative w-130 h-130 my-8">
              <Image className="rounded-2xl object-cover object-top" 
                          src={AboutImg} 
                          alt="hon-nnamdi-okoye-emmanuel" 
                          fill 
                          />
              </div>
            
            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Bio</h2>
                <p>
                  Hon. Nnamdi Emmanuel Okoye is an entrepreneur, philanthropist, community advocate, and emerging political leader dedicated to advancing the development of Anambra Central Senatorial District and improving the lives of its people.
                </p>
                <p>
                  Born on April 16, 1994, in Nnewi, Anambra State, he hails from Idemili North Local Government Area and represents a new generation of leaders who combine youthful energy, global exposure, professional experience, and a deep commitment to public service.

                </p> 
                 <p>
                  As a successful businessman and founder of multiple ventures, Hon. Okoye has built a reputation for hard work, innovation, discipline, and integrity. His professional journey has taken him beyond Nigeria's borders, exposing him to global best practices in business, leadership, logistics, and economic development.
                </p> 
                <p>
                  A devoted family man, husband, and father, he remains firmly connected to the values that shaped him—service, fairness, accountability, and respect for humanity. He believes leadership is not about occupying positions of authority but about creating opportunities, solving problems, and improving the lives of others.
                </p>
                <p>
                  Today, Hon. Nnamdi Okoye seeks to bring his experience, passion, and commitment to service to the Nigerian Senate, where he hopes to champion policies and initiatives that promote economic growth, youth empowerment, quality education, healthcare access, security, and sustainable development throughout Anambra Central.
                </p>
              </div>

              {/* Early Life */}

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Early Life and Background</h2>
                <p>
                  Hon. Nnamdi Emmanuel Okoye was born into a family deeply rooted in discipline, service, and excellence. He is the fourth child in a family of five children and was raised by parents whose dedication to public service left a lasting impact on his 
                  <a className="font-medium text-sky-500 hover:underline" href="#0"> character and worldview. </a>
                </p>
                <p>
                  His father, a retired Medical Doctor and civil servant, and his mother, a retired Director of Nursing Services, devoted their careers to improving the lives of others. Their commitment to integrity, professionalism, hard work, and service to  
                  <a className="font-medium text-sky-500 hover:underline" href="#0"> humanity</a> became the foundation upon which he built his own life.
                </p>
                <p>
                  Growing up, <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Okoye</strong> experienced the guidance of a strict and principled father who instilled in him the values of discipline, accountability, perseverance, and respect for others. While he often describes himself as a stubborn child, he acknowledges that the firm upbringing provided by his parents played a significant role in shaping the person he has become today.
                </p>
                <p>
                  Coming from a humble but values-driven background, he learned early that success is achieved through hard work, education, determination, and unwavering integrity. These lessons continue to influence his leadership philosophy and his commitment to serving people selflessly.
                </p>

                <p>
                  Inspired by distinguished leaders such as Dr. Nnamdi Azikiwe, Kwame Nkrumah, Nelson Mandela, and his mentor Col. Sani Bello, Hon. Okoye firmly believes that leadership should be rooted in service rather than personal ambition. This belief forms the cornerstone of his vision for Anambra Central.
                </p>
              </div> 

          {/* Education */}
              
               <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Education</h2>
                <p>
                  Hon. Nnamdi Emmanuel Okoye's educational journey reflects his commitment to  
                  <a className="font-medium text-sky-500 hover:underline" href="#0"> personal growth, </a>intellectual development, and lifelong learning.
                </p>
                <p>
                  He began his early education at Immaculata Nursery and Primary School, Nnewi, where he developed the foundational values of discipline and academic excellence. He proceeded to St. Paul's Secondary School, Nibo-Nise, Awka, before continuing his secondary education at New Era Model Secondary School, Nnewi.
                </p>
                <p>
                  Driven by <strong className="font-medium text-slate-800 dark:text-slate-100"> a desire to understand </strong> society, governance, leadership, and international affairs, he pursued higher education at Delta State University, Abraka, where he earned a Bachelor of Arts (B.A.) degree in History and International Studies.

                </p>
                <p>
                  His academic background has equipped him with a broad understanding of historical developments, governance systems, diplomacy, public policy, and nation-building—knowledge that continues to shape his perspective on leadership and public service.

                </p>

                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Okoye</strong> remains a strong advocate for education and believes that investing in human capital is one of the most effective ways to create sustainable development and economic prosperity.

                </p>
              </div>

                {/* Professional Career */}
              
               <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Professional Career</h2>
                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Emmanuel Okoye's</strong> professional journey is defined by entrepreneurship, innovation, leadership, and a commitment to excellence.

                </p>
                <p>
                  Following his National Youth Service Corps (NYSC) assignment with the Niger State Ministry of Youth and Sports, he ventured into business and entrepreneurship, where he demonstrated remarkable leadership and business acumen.
                </p>
                <p>
                  He co-founded <strong className="font-medium text-slate-800 dark:text-slate-100"> Eagle View Merchandise </strong> and subsequently expanded his professional experience internationally by joining EV Cargo in Dubai, United Arab Emirates, where he served as a Sales Executive. Notably, he became the first African to work with the organization, breaking barriers and demonstrating excellence in a highly competitive international environment.


                </p>
                <p>
                  Building on his extensive experience in logistics and business management, he founded Allport Logistics & Haulage Services International Limited, where he currently serves as Chief Executive Officer. Through this enterprise, he has contributed to economic growth, business development, and job creation.


                </p>

                <p>
                  In recognition of his professional accomplishments and commitment to industry standards, he became a Fellow of the Chartered Institute of Auctioneers of Nigeria, further reflecting his dedication to professional excellence and ethical business practices. 
                  <br />
                  His career achievements demonstrate his ability to lead organizations, create opportunities, manage resources effectively, and deliver results—qualities he intends to bring into public service.

                </p>
              </div>

              {/* Community Service */}
              
               <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Community Service</h2>
                <p>
                  For <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Emmanuel Okoye</strong> service to humanity is not a political slogan but a way of life.


                </p>
                <p>
                  Long before considering elective office, he quietly dedicated his time and resources to supporting individuals and families facing various challenges. Many of these acts of kindness were carried out without publicity or recognition, reflecting his belief that genuine service does not seek applause.
                  <br />
                  Over the years, he has sponsored the education of numerous young people by paying school fees and providing support to students who might otherwise have been unable to continue their education.

                </p>
                <p>
                  Through collaborations with healthcare professionals, including members of his family, he has assisted many individuals with medical expenses and healthcare interventions, helping vulnerable families access much-needed treatment.


                </p>
                <p>
                 His commitment to youth development has also seen him support and mentor young Nigerians seeking opportunities abroad. Through his efforts, more than twenty young people have successfully pursued educational and professional opportunities outside Nigeria.
                <br />
                These experiences have strengthened his belief that leadership must be compassionate, people-centered, and focused on improving lives.
                </p>

              </div>        

                 {/* Political Journey */}
              
               <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Political Journey</h2>
                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Emmanuel Okoye's</strong> entry into politics is driven by a sincere desire to serve and contribute to the progress of his people.


                </p>
                <p>
                 For many years, he nurtured a passion for public service and leadership, believing that politics should be a platform for positive transformation and community development. However, he remained patient, focusing on personal growth, professional achievements, and community impact before seeking elective office.

                  <br />
                  As he observed the challenges facing communities across Anambra Central, he became increasingly convinced that meaningful change requires the active participation of capable and committed individuals in governance.

                </p>

                <p>
                  Guided by a belief in servant leadership, he chose to join the African Democratic Congress (ADC), aligning himself with a platform that promotes accountability, inclusiveness, development, and people-centered governance.
                </p>
                <p>
                 His political journey is founded on the conviction that public office should be used to serve the people, expand opportunities, strengthen institutions, and deliver measurable improvements in the lives of citizens.
                </p>
              </div>    

                 {/* Political Vision & Ambition */}
              
               <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Political Vision & Ambition</h2>
                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Emmanuel Okoye</strong>  is seeking to represent the people of Anambra Central Senatorial District in the Nigerian Senate because he believes the district deserves stronger, more responsive, and development-focused representation.
                </p>
                <p>
                 He envisions an Anambra Central where economic opportunities are abundant, young people are empowered, businesses flourish, healthcare is accessible, education is prioritized, and every community experiences visible development.
                </p>

                <p>
                  As a member of a new generation of leaders, he brings fresh ideas, global exposure, entrepreneurial experience, and a deep understanding of the challenges and aspirations of ordinary citizens.
                  <br />
                  His ambition is not merely to occupy a political office but to provide impactful representation that delivers tangible benefits to the people. He believes that leadership should be measured not by promises made but by results achieved.
                </p>
                <p>
                 Through strategic legislation, stakeholder engagement, youth empowerment initiatives, infrastructure advocacy, agricultural development, healthcare improvements, and economic growth programs, he seeks to position Anambra Central as one of the most progressive and prosperous senatorial districts in Nigeria.

                </p>
                <p>
                 Hon. Okoye believes that the future of Anambra Central can be brighter than its present. With purposeful leadership, accountability, and collective effort, he is confident that the district can become a model of development, innovation, and opportunity for future generations. 
                 <br />
                  His commitment is simple: to serve with integrity, lead with purpose, and deliver with action.

                </p>
              </div>     

              {/* <Experience /> */}

              <div className="space-y-4 mt-20">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via <a className="font-medium text-sky-500 hover:underline" href="#0">email</a> and <a className="font-medium text-sky-500 hover:underline" href="#0">Twitter</a> to chat about projects and ideas. 
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-60 lg:w-75 shrink-0">
        <div className="space-y-6">

          <WidgetValues />
          <WidgetSponsor />
          <WidgetBook />  
        </div>
      </aside>

    </div>
  )
}
