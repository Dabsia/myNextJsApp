import { useRouter } from "next/router"
import Head from 'next/head'


const Profile = () => {
    const Router = useRouter()

    const {username} = Router.query
  return (
      <div>
          <Head>
              <title>{ username}</title>
          </Head>
          
          <h3>Hello {username}!</h3>
        
      </div>
  )
}

export default Profile