// our-domain.com/
import Link from "next/link"
import Head from 'next/head'
const HomePage = () => {
    return (
        <div>
            <Head>
                <title>My First Next Js App</title>
            </Head>
            <h1>The Home Page </h1>
            <Link href = '/profile'>Go To Profile Page</Link>

        </div>
    )
    
    

}

export default HomePage