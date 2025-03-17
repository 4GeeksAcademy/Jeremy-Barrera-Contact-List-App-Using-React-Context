import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";

const Card = ({ id, name, email, phone, address, onDelete, onEdit }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3 mx-auto" style={{ minWidth: "90%" }}>
                <div className="row g-0 align-items-center">
                    <div className="col-4 py-3 p-3 ">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{ width: "200px" }} className="img-fluid rounded-circle" alt={name} />
                    </div>
                    <div className="col-md-6 text-start">
                        <div className="card-body">
                            <h3 className="card-title pb-2">{name}</h3>
                            <p className="card-text"><i class="fa-solid fa-location-dot pe-2"></i><strong>Address:</strong> {address}</p>
                            <p className="card-text"><strong><i class="fa-solid fa-phone-flip pe-2"></i>Email:</strong> {email}</p>
                            <p className="card-text"><strong><i class="fa-solid fa-envelope pe-2"></i>Phone:</strong> {phone}</p>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <i className="fa-solid fa-pencil" style={{ cursor: "pointer" }} onClick={() => onEdit(id)}></i>
                    </div>
                    <div className="col-md-1">
                        <i className="fa-solid fa-trash" style={{ cursor: "pointer" }} onClick={() => onDelete(id)}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
