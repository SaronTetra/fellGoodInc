import product_1 from '../../assets/help.png';
import Image from 'next/image'



export default function Help():JSX.Element{



    return(
        <div  style={{width:"400px", margin:"auto",paddingTop:"5%"
    }} >
         <title>Feels Good</title>
              <Image
    
    src={product_1}
    width={300}
    height={150}
    layout="responsive"
/>
    <div className='py-10'>This application was created for people who are still experiencing mental health difficulties resulting from the COVID-19 pandemic. Due to the isolation and huge sources of stress during this specific period, we can now see a large increase in the suicide rate and the number of reports of mental problems especially among young people. We want to take care of their return to the world without isolation and help with the loneliness that plagues them, giving them the opportunity to do something good and feel good about their actions themselves in a healthy way.</div>  
        
      <h1 className="intro ">
 <a href="/">Back to main page</a>
</h1></div>
    )
}