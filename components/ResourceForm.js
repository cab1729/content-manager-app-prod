import { useState } from "react";

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const ResourceForm = ({onFormSubmit, initialData}) => {
    const [form, setForm] = useState(initialData || DEFAULT_DATA);

    const resetForm = () => setForm(DEFAULT_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const submitForm = () => {
        onFormSubmit(form);
    }

    return (
        <div className="resource-form">
                        <h1 className="title">Add New Resource</h1>
                        <form>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input 
                                    value={form.title}
                                    onChange={handleChange}
                                    name="title" 
                                    className="input" 
                                    type="text" 
                                    placeholder="Title"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea
                                    value={form.description}
                                    onChange={handleChange}
                                    name="description" 
                                    className="textarea" 
                                    type="text" 
                                    placeholder="Description"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Link</label>
                            <div className="control">
                                <input
                                    value={form.link}
                                    onChange={handleChange}
                                    name="link" 
                                    className="input" 
                                    type="text" 
                                    placeholder="https://"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Priority</label>
                            <div className="control">
                                <div className="select">
                                    <select 
                                        value={form.priority} 
                                        onChange={handleChange}
                                        name="priority"> 
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Time to finish</label>
                            <div className="control">
                                <input
                                    value={form.timeToFinish}
                                    onChange={handleChange}
                                    name="timeToFinish" 
                                    className="input" 
                                    type="number" 
                                    placeholder="60"
                                />
                            </div>
                            <p className="help">Time is in minutes</p>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button
                                    type="button"
                                    onClick={submitForm} 
                                    className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <button
                                    type="button"
                                    onClick={resetForm} 
                                    className="button is-link is-light">Reset Form</button>
                            </div>
                        </div>
                        </form>
                        </div>
    )
}

export default ResourceForm;