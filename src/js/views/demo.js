import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });

    useEffect(() => {
        const existingContact = store.contacts.find(contact => contact.id == id);
        if (existingContact) {
            setContact(existingContact);
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await actions.updateContact(id, contact);
        } else {
            await actions.createContact(contact);
        }
        navigate("/");
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h1>{id ? "Edit Contact" : "Add a New Contact"}</h1>
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={contact.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" name="address" value={contact.address} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" name="phone" value={contact.phone} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" name="email" value={contact.email} onChange={handleChange} className="form-control" />
            </div>
            <button type="button" onClick={handleSubmit} className="btn btn-success w-100">Save</button>
            <br />
            <Link to="/">Or get back to contacts</Link>
        </div>
    );
};
