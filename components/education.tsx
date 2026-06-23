import Image from 'next/image'

import EducationIcon01 from '@/public/images/education-icon-01.svg'
import EducationIcon02 from '@/public/images/education-icon-02.svg'

export default function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Education</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-7 before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EducationIcon01} width={24} height={24} alt="Purdue University" />
            </div>
            <div className="pl-20 space-y-1">
              {/* <div className="text-xs text-slate-500 uppercase">May 2017 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2020</div> */}
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Bachelor of Arts (B.A.)</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Delta State University, Abraka</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Developed  a broad understanding of historical developments, governance systems, diplomacy, public policy, and nation-building—knowledge that continues to shape his perspective on leadership and public service.
</div>
            </div>
          </div>
        </li>


        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-7 before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EducationIcon02} width={24} height={26} alt="San Jose State UniversitySan Jose State University" />
            </div>
            <div className="pl-20 space-y-1">
              {/* <div className="text-xs text-slate-500 uppercase">May 2013 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2017</div> */}
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Secondary Education</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">New Era Model Secondary School, Nnewi</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Developed the foundational values of discipline and academic excellence</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}