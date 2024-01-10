import { useEffect, useState } from "react";
import { Form, redirect, useSearchParams } from "react-router-dom";
import axios from "axios";

import "./ServiceForm.css";

export const action = async ({ request }) => {
    try {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData);
        const { data } = await axios.post(
            "https://portfolio-api-ten-hazel.vercel.app/form-submission",
            formData,
            { headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(data);
        return redirect("/thank-you");
    } catch (err) {
        console.error(err);
        const { data } = await axios.get("https://portfolio-api-ten-hazel.vercel.app/failed-submission");
        console.log (data);
        return redirect("/failed");
    }
}

export default function ServiceForm() {
    const [selected, setSelected] = useState("");
    const [size, setSize] = useState("Small");
    const [rateType, setRateType] = useState("");
    const [query, setQuery] = useSearchParams();
    const service = query.get("service");
    const rate = query.get("rate");

    useEffect(() => {
        setRateType(rate);
        if (service === "ui-ux-design") {
            setSelected("UI/UX Design");
        } else if (service === "front-end-dev") {
            setSelected("Front-End Development");
        } else if (service === "back-end-dev") {
            setSelected("Back-End Development");
        } else if (service === "full-stack-dev") {
            setSelected("Full-Stack Development");
        } else if (service === "webflow-dev") {
            setSelected("Webflow Development");
        } else {
            setSelected("I'm Not Sure");
        }
    }, []);

    const serviceChange = e => setSelected(e.target.value);
    const projectSizeChange = e => setSize(e.target.value);
    const rateChange = e => setRateType(e.target.value);
    
    return (
        <Form method="post" action="/hire" netlify className="section">
            <div className="grid">
                <label>
                    Your Full Name*
                    <input type="text" name="name" id="name" placeholder="Alexander Rowe" required />
                </label>
                <label>
                    Your Email*
                    <input type="email" name="email" id="email" placeholder="example@domain.com" required />
                </label>
                <label>
                    Select My Services
                    <div className="wrapper">
                        <select name="services" id="services" value={ selected ? selected : "I'm Not Sure" } onChange={ serviceChange }>
                            <option value="I'm Not Sure">I'm Not Sure</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Front-End Development">Front-End Development</option>
                            <option value="Back-End Development">Back-End Development</option>
                            <option value="Full-Stack Development">Full-Stack Development</option>
                            <option value="Webflow Development">Webflow Development</option>
                        </select>
                    </div>
                </label>
                <label>
                    Select Your Budget
                    <div className="wrapper">
                        <select name="budget" id="budget">
                            <option value="I'm Not Sure">I'm Not Sure</option>
                            <option value="Less than $500">Less than $500</option>
                            <option value="$500 - $1000">$500 - $1000</option>
                            <option value="$1000 - $2500">$1000 - $2500</option>
                            <option value="$2500 - $5000">$2500 - $5000</option>
                            <option value="More than $5000">More than $5000</option>
                        </select>
                    </div>
                </label>
                <label>
                    Project Size
                    <div className="wrapper">
                        <select name="projectSize" id="project-size" value={ size } onChange={ projectSizeChange }>
                            <option value="I'm Not Sure">I'm Not Sure</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                </label>
                <label>
                    Rate
                    <div className="wrapper">
                        <select name="rate" id="rate" value={ rateType ? rateType : "I'm Not Sure" } onChange={ rateChange }>
                            <option value="I'm Not Sure">I'm Not Sure</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Project">Project</option>
                        </select>
                    </div>
                </label>
            </div>

            <label>
                Project Title*
                <input type="text" name="projectTitle" id="project-title" placeholder="Project Title" required />
            </label>
            <label>
                Describe Your Project*
                <textarea name="projectDescription" id="project-description" placeholder="Project Description..." required></textarea>
            </label>

            <button type="submit" className="submit">Submit</button>
        </Form>
    );
}