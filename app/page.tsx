 
export default function Home() {
  return (    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit text-xl"> Serving our greater Abilene area &nbsp; 
 
        <a href="tel:1-512-809-0129" className="font-mono font-bold "> (512) 809-0129 </a>    
{/**  -----   HAMBURGER   ----
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fixed right-5 w-6 h-6 " ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>       
*/}
        <a href="#" className=" fixed right-3 text-sm font-semibold leading-6 text-gray-900">Sign Up / Log in <span aria-hidden="true">&rarr;</span></a>
  

        </p>

        <input placeholder='questions about your project are free !'  className="fixed bottom-0 left-0 flex h-8 w-full items-end justify-center text-center text-lg bg-gradient-to-t from-white via-white dark:from-black dark:via-black" >

        </input>

      </div>

      <section className="relative place-items-center before:absolute before:h-[200px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial  before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

        <h1 className="text-5xl py-8 sm:py-8">Handyman Extraordinaire</h1>  
        <h2 className="text-2lg">Services ranging from but not limited to:</h2>

        <article className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7 mx-auto max-w-xxl px-2 py-8 sm:px-2 sm:py-16 lg:max-w-7xl lg:px-8 space-x-3">             
            <ul>
              <li>ELECTRICAL</li>
              <li>ceiling fans & lights</li>
              <li>switches & outlets</li>  
              <li>smoke detectors</li>
            </ul>
            <ul>
              <li>PLUMBING</li>
              <li>sinks & faucets</li>
              <li>floats & valves</li>
              <li>toilets & wax rings</li>
            </ul>
            <ul>
              <li>MOUNTING</li>
              <li>tv & sound system</li>
              <li>shelving</li>
              <li>art & mirrors</li>
              <li>hand & shower rails</li>
            </ul>
            <ul>
              <li>PRESSURE WASH</li>
              <li>residential</li>
              <li>commercial</li>
              <li>auto & RV </li> 
              <li>boat & dock</li>
            </ul>
            <ul>
              <li>ASSEMBLY</li>
              <li>office pieces</li>
              <li>furniture</li>
              <li>trampolines</li>
              <li>sports equiptment</li>
              <li>playscapes</li>          
            </ul>
            <ul>
              <li>HAULING</li>
              <li>help moving</li>
              <li>pickups</li>
              <li>deliveries</li>
              <li>hot shot</li>
            </ul>
            <ul>
              <li>CLEANING</li>
              <li>construction</li>
              <li>make ready (rentals)</li>
              <li>home & auto</li>
            </ul>
            <ul>
              <li>HOME REPAIRS</li>
              <li>flashing & trim</li>
              <li>drywall patching</li>
              <li>calking & grout</li>    
              <li>door locks & frame</li>        
            </ul>               
            <ul>
              <li>WELDING</li>
              <li>fence repairs</li>
              <li>railing repairs</li> 
              <li>gate repairs</li>         
            </ul> 
            <ul>
              <li>AUTOMOTIVE</li>
              <li>tune ups</li>
              <li>tire , battery & lights</li>
              <li>simple repairs</li>
            </ul> 
            <ul>
              <li>LANDSCAPING</li>
              <li>cuts, edge & clean</li>
              <li>mulching & weeding</li>
              <li>clearing & de-stump</li>            
            </ul>
            <ul>
              <li>DEMOLITION</li>
              <li>bathrooms</li>
              <li>kitchens</li>
              <li>decks & stairs</li>            
            </ul>
        </article>

      </section>
      
      <h6 className="text-5xl py-8 sm:py-8" >whats being built</h6>  
      <h2 className="text-2lg py-1">https://www.github.com/88coderz/nextjs</h2>

      <div className="mt-9 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  >

          <h2 className={`mb-3 text-2xl font-semibold`}>Work List & Forum{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt;  </span> </h2>

          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>List what you need done and contractors can make bids! You can also make a paywall for the suggestions you give, basically get paid to give answers !</p>

        </a>

        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" > 

          <h2 className={`mb-3 text-2xl font-semibold`}> AI Feedback{' '} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span> </h2>

          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}> Scrape the internet for suggestions to your project. Just always ask a professional to verify the information while AI is training! </p>

        </a>

        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" >

          <h2 className={`mb-3 text-2xl font-semibold`}> Barter{' '} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span> </h2>

          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}> Lets make sure only the best deals are made. List your chat and projects publically so you can have the market interact and make sure you are getting a great deal. </p>

        </a>

        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  >

          <h2 className={`mb-3 text-2xl font-semibold`}> Blog & Community{' '} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt;  </span> </h2>

          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}> Twice as many people turned 65 this year compared to 25, twice as many skilled professionals are retiring from our job economy. Letz learn </p>

        </a>

      </div>

    </main>
  )
}
