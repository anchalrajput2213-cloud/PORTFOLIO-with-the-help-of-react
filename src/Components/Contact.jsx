import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone ,message);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <div id="Contact"className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
  <div className="bg-white shadow-md rounded-lg w-full max-w-5xl grid md:grid-cols-2 gap-10 p-8">
    <div><h1 className="text-3xl font-bold mb-6">Contact Me</h1><div className="space-y-5">
        <div><h3 className="font-semibold">Phone</h3><p>+91 9876543210</p></div>
        <div><h3 className="font-semibold">Email</h3><p>anchal@example.com</p></div>
        <div><h3 className="font-semibold">Location</h3><p>New Delhi, India</p></div>
        <div><h3 className="font-semibold">GitHub</h3><p>github.com/anchalrajput</p></div>
        <div><h3 className="font-semibold">LinkedIn</h3><p>linkedin.com/in/anchalrajput</p></div>
      </div>
    </div>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md p-3"/>
      <input type="email" placeholder="Your Email"value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md p-3"/>
      <input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded-md p-3"/>
      <textarea rows="4"placeholder="Your Message"value={message} onChange={(e) => setMessage(e.target.value)}className="w-full border rounded-md p-3"></textarea>
      <button type="submit" className="w-full border rounded-md p-3 hover:bg-gray-200">Submit</button>
       </form>

  </div>
</div>
  );
}

export default Contact;