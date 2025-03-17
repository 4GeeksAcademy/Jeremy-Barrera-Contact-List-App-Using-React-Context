import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContacts();
    }, []);

    const handleDelete = async (id) => {
        await actions.deleteContact(id);
        actions.getContacts();
    };

    const handleEdit = (id) => {
        navigate(`/demo/${id}`); 
    };

    return (
        <div>
            {store.contacts.map((contact) => (
                <Card
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                    address={contact.address}
                    onDelete={() => handleDelete(contact.id)}
                    onEdit={() => handleEdit(contact.id)} 
                />
            ))}
        </div>
    );
};

export default Home;
