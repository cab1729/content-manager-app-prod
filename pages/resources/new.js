import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const ResourceCreate = () => {
    const [form, setForm] = useState(DEFAULT_DATA);
    const router = useRouter();

    const createResource = (formData) => {
        axios.post("/api/resources", formData)
            .then(_ => router.push("/"))
            .catch(err => alert(err?.response?.data));
    }

    const resetForm = () => setForm(DEFAULT_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm onFormSubmit={createResource}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResourceCreate;