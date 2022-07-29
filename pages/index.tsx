import type { NextPage } from 'next'
import { server } from '../lib/config'
import Users from '../components/Users'
import axios from 'axios'

const Home: NextPage = ({users}:any) => {
  return (
    <Users users={users}/>
  )
}

export async function getServerSideProps() {
  let users;
  const res = await axios.get(`${server}/api/users`).then(res1=> {
    users = res1.data;
  })
  return {
      props:{
          users
      }
  }
}
export default Home
