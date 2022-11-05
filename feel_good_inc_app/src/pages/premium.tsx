import product_1 from '../../assets/rich.webp';
import Image from 'next/image'
import { useRouter } from 'next/router';






export default function Premium():JSX.Element{
    let router=useRouter()

    function redirect(event:any){
        event.preventDefault();
          
           router.replace("/")
       }

    return(
        <div className="flex dark:bg-gray-900 w-full " style={{margin:"auto",paddingTop:"2%",paddingLeft:"5%"}}>
             <section>
        <header>
          <h1 className="mb-6 text-5xl margin-auto font-extrabold dark:text-gray-200">
            Premium mode
          </h1>
          
          <div className='py-10 mb-6 text-xl text-center font-extrabold dark:text-gray-200'>Do you want to become superhelper? If you would like not help like others normal people. Try our's special packet.</div>
         </header>
         <div className='flex'>
         <button onClick={redirect} className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's begin with only 19.99$ per month</button>
        <div className='w-10'></div>
         <button onClick={redirect} className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Not this time I want go back to home Page</button>
        </div>
        <Image
    
    src={product_1}
    width={50}
    height={50}
    layout="responsive"
/>
       </section>
       

        
      <h1 className="intro ">
 <a href="/">Back to main page</a>
</h1></div>
    )
  
}
