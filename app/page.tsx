
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Serving Travis County while site under construction&nbsp;
          <code className="font-mono font-bold">(512)809-0129</code>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Questions about your project are free !
        </div>

      </div>

      <section className="relative place-items-center before:absolute before:h-[200px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

        <h1 className="text-5xl py-8 sm:py-8" >Handyman Extraordinaire</h1>    
        <h2 className="text-2lg">services ranging from but not limited to:</h2>

        <article className="flex mx-auto max-w-xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 space-x-9">             
            <ul>
              <li>ELECTRICAL</li>
              <li>Ceiling Fans & Lights</li>
              <li>Switches & Outlets</li>  
              <li>Smoke Detectors</li>        
            </ul>  
            <ul>
              <li>PLUMBING</li>
              <li>Sinks & Faucets</li>
              <li>Floats & Valves</li>
              <li>Toilets & Wax Rings</li>
            </ul>
            <ul>
              <li>MOUNTING</li>
              <li>TV & Sound System</li>
              <li>Shelving</li>
              <li>Art & Mirrors</li>
              <li>Hand & Shower rails</li>
            </ul> 
            <ul>
              <li>PRESSURE WASH</li>
              <li>Residential</li>
              <li>Commercial</li>
              <li>Auto , RVs , Boat & Dock</li>
            </ul>
        </article>
        <article className="flex mx-auto max-w-xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 space-x-9">
        <ul>
              <li>ASSEMBLY</li>
              <li>Office pieces</li>
              <li>Furniture</li>
              <li>Trampolines</li>
              <li>Sports Equiptment</li>
              <li>Playscapes</li>          
            </ul>  
            <ul>
              <li>HAULING</li>
              <li>Help Moving</li>
              <li>Pickups</li>
              <li>Deliveries</li>
              <li>Hot Shot</li>
            </ul>
            <ul>
              <li>CLEANING</li>
              <li>Construction</li>
              <li>Make Ready</li>
              <li>Home & Auto</li>
            </ul>        
            <ul>
              <li>HOME REPAIRS</li>
              <li>Flashing & Trim</li>
              <li>Drywall patching</li>
              <li>Calking & Grout</li>    
              <li>Door Locks, Frame</li>        
            </ul>   
        </article>
        <article className="flex mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 space-x-9">             
            <ul>
              <li>WELDING</li>
              <li>Fence repairs</li>
              <li>Railing repairs</li> 
              <li>Gate Repairs</li>         
            </ul> 
            <ul>
              <li>AUTOMOTIVE</li>
              <li>Tune Ups</li>
              <li>Tire , Battery & Lights</li>
              <li>Simple repairs</li>
            </ul> 
            <ul>
              <li>LANDSCAPING</li>
              <li>Cuts, Trim & Cleaning</li>
              <li>Mulching & Weeding</li>
              <li>Clearing and DeStumping</li>            
            </ul>
            <ul>
              <li>DEMOLITION</li>
              <li>Bathrooms</li>
              <li>Kitchens</li>
              <li>Decks & Stairs</li>            
            </ul>
        </article>

      </section>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"      >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Forum{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;  </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            List what you need done and contractors can make bids!
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"     > 
          <h2 className={`mb-3 text-2xl font-semibold`}>
            AI Feedback{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Scrape the internet for suggestions to your project. Just always ask a professional to verify the information while AI is training!
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"      >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Barter{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;       </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lets make sure only the best deals are made. List your chat and projects publically so you can have the market interact and make sure you are getting a great deal.         </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Blog & Community{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Twice as many people turned 65 this year compared to 25, twice as many skilled professionals are retiring from our job economy. Letz learn 
          </p>
        </a>
      </div>
    </main>
  )
}
