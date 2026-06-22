export default function WidgetValues() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">Values</div>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            {/* <span className="text-base mr-1.5">🇬🇧</span>  */}
            <span className="font-aspekta font-[650] text-sm truncate">Integrity</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-200)_0)] dark:bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            {/* <span className="text-base mr-1.5">🇮🇹</span>  */}
            <span className="font-aspekta font-[650] text-sm truncate">Service</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-200)_0)] dark:bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            {/* <span className="text-base mr-1.5">🇪🇸</span>  */}
            <span className="font-aspekta font-[650] text-sm truncate">Action</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-200)_0)] dark:bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            {/* <span className="text-base mr-1.5">🇬🇧</span>  */}
            <span className="font-aspekta font-[650] text-sm truncate">progress</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-200)_0)] dark:bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            {/* <span className="text-base mr-1.5">🇮🇹</span>  */}
            <span className="font-aspekta font-[650] text-sm truncate">Empowerment</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-200)_0)] dark:bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            {/* <span className="text-base mr-1.5">🇪🇸</span>  */}
            <span className="font-aspekta font-[650] text-sm truncate">Accountability</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-200)_0)] dark:bg-[conic-gradient(var(--color-sky-500)_100%,0,var(--color-slate-700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
      </ul>
    </div>
  )
}