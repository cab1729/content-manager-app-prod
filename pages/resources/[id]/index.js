import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";
import ResourceLabel from "components/ResourceLabel";
import moment from "moment";

const ResourceDetail = ({resource}) => {

    const activateResource = () => {
        axios.patch("/api/resources", {...resource, status: "active"})
            .then(_ => location.reload())
            .catch(_ => alert("Cannot activate the resource"))
    }

    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        {       
                            <section className="section">
                                <div className="columns">
                                    <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">
                                            {moment(resource.createdAt).format("LLL")}
                                            <ResourceLabel status={resource.status}  />
                                        </h2>
                                        <h1 className="title">{resource.title}</h1>
                                        <p>{resource.description}</p>
                                        <p>Time to finish: {resource.timeToFinish} min</p>
                                        { resource.status === "inactive" &&
                                        <>
                                        <Link href={`/resources/${resource.id}/edit`}>
                                            <a className="button is-warning">
                                                Update
                                            </a>
                                        </Link>
                                        <button
                                            onClick={activateResource} 
                                            className="button is-success ml-1">
                                            Activate
                                        </button>
                                        </>
                                        }

                                    </div>
                                    </div>
                                </div>
                            </section>
                            
                        }
                        <div className="is-divider"></div>
                    </div>
                    </div>
                </section>
        </Layout>

    )
}

// ResourceDetail.getInitialProps = async ({query}) => {
    
//     const dataRes = await fetch(`http://localhost:3001/api/resources/${query.id}`);
//     const data = await dataRes.json();

//     return {
//         resource: data        
//     }
// }

export async function getServerSideProps({params}) {

    const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
    const data = await dataRes.json();

    return {
        props: {
            resource: data
        }
    }
}

export default ResourceDetail;