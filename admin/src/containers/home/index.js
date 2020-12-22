import React from 'react'
import Layout from '../../components/layout'
import { Jumbotron } from 'react-bootstrap';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
      <Jumbotron style={{margin: '15rem', background: '#fff' }} className="text-center">
        <h1>Welcome to Admin Dashboard</h1>
        <p>This is admin dashboard page. If you're an admin and have an account, please sign in first :)</p>
      </Jumbotron>
    </Layout>
   )

 }

export default Home