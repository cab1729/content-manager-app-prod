import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";

//import data from "pages/api/data.json";

const HomePage = ({resources}) => {
  
  return (
    <Layout>
      <ResourceHighlight 
        resources={resources}
      />
      <Newsletter />
      <ResourceList 
        resources={resources}
      />
      <Footer />
  
    </Layout>
  )
}

export async function getServerSideProps() {

  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}

// export async function getStaticProps() {

//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props: {
//       resources: data
//     }
//   }
// }

export default HomePage;
