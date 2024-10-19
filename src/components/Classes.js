// import React, { useState } from "react";
// import "./Classes.css";
// import * as XLSX from "xlsx";

// function Classes() {
//   const [formVisible, setFormVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleCardClick = () => {
//     setFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setFormVisible(false);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const ws = XLSX.utils.json_to_sheet([formData]);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
//     XLSX.writeFile(wb, "FormData.xlsx");

//     // Clear the form and close it
//     setFormData({ name: "", email: "", message: "" });
//     handleCloseForm();
//   };

//   return (
//     <section id="classes" className="classes">
//       <h2 style={{ top: "-50px" }}>Our Classes</h2>
//       <p style={{ top: "-63px" }}>
//         Whether you are a beginner or a pro, we have classes for all levels!
//       </p>
//       <div className="class-list">
//         <div className="class-item" onClick={handleCardClick}>
//           <img src="khushbu.jpeg" alt="khushbu" className="card-image" />
//           <h3>Beginner</h3>
//           <p>Get started with the basics of Garba.</p>
//         </div>
//         <div className="class-item" onClick={handleCardClick}>
//           <img src="deti.jpeg" alt="deti" className="card-image" />
//           <h3>Intermediate</h3>
//           <p>Build on your skills and learn new moves.</p>
//         </div>
//         <div className="class-item" onClick={handleCardClick}>
//           <img src="meetu.jpeg" alt="meet" className="card-image" />
//           <h3>Advanced</h3>
//           <p>Master complex routines and become a pro!</p>
//         </div>
//       </div>

//       {/* Form Popup */}
//       {formVisible && (
//         <div className="form-popup">
//           <button className="close-button" onClick={handleCloseForm}>
//             ✖
//           </button>
//           <form className="class-form" onSubmit={handleSubmit}>
//             <h2>Contact Us</h2>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label>Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Classes;

import React, { useState } from "react";
import "./Classes.css";

function Classes() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCardClick = () => {
    setIsFormOpen(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setIsFormOpen(false); // Close the form
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="classes" className="classes">
      <h2 style={{ top: "-50px" }}>Our Classes</h2>
      <p style={{ top: "-63px" }}>
        Whether you are a beginner or a pro, we have classes for all levels!
      </p>
      <div className="class-list">
        <div className="class-item" onClick={handleCardClick}>
          <img src="khushbu.jpeg" alt="khushbu" className="card-image" />
          <h3>Beginner</h3>
          <p>Get started with the basics of Garba.</p>
        </div>
        <div className="class-item" onClick={handleCardClick}>
          <img src="deti.jpeg" alt="deti" className="card-image" />
          <h3>Intermediate</h3>
          <p>Build on your skills and learn new moves.</p>
        </div>
        <div className="class-item" onClick={handleCardClick}>
          <img src="meetu.jpeg" alt="meet" className="card-image" />
          <h3>Advanced</h3>
          <p>Master complex routines and become a pro!</p>
        </div>
      </div>

      {/* Form Popup */}
      {isFormOpen && (
        <div className="form-popup">
          <form onSubmit={handleSubmit} className="form-container">
            <h2>Contact Us</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setIsFormOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Classes;
