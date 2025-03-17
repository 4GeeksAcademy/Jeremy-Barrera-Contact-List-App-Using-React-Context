
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Jeremy/contacts");
					if (response.status == 404) {
						await getActions().createAgenda()
						return;
					}
					const data = await response.json();
					setStore({ contacts: data.contacts });
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},
			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Jeremy", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
					})
					if(!response.ok){
						throw new Error ("Something went wrong")
					}
				} catch (error) {
					console.log(error);
				}
			},
			createContact: async (newContact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Jeremy/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(newContact)
					})
					if (!response.ok) {
						throw Error(error)
					}
				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Jeremy/contacts/${id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" },
					});
			
					if (response.ok) {
						await getActions().getContacts();
					} else {
						console.error("Failed to delete contact", response.status);
					}
				} catch (error) {
					console.log("Error deleting contact:", error);
				}
			},
			updateContact: async (id, updatedData) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Jeremy/contacts/${id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(updatedData),
					});
			
					if (!response.ok) throw new Error("Failed to update contact");
			
					getActions().getContacts(); 
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			}			

		},
	};
};

export default getState;