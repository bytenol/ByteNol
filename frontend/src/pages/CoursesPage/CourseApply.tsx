import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "774b779c-03e6-40a2-b73a-89523fc429b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" required/>
      <input type="email" name="email" required/>
      <textarea name="message" required></textarea>
      <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
}