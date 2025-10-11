// Contact.js
export default function Contact() {
    return (
        <section>
            {/* The content is static (no need for props) */}
            <h2>Get In Touch!</h2> 
            <p>Email: eduardolopezrosado.dev@gmail.com</p>
            <p>Phone: 1-800-new-devs</p> 
            
            {/* The anchor logic = anchor tag, href="https://string",attribute="string",closetag,acceccibilty,close anchor*/}
            <ul>
                <li><a href="https://www.linkedin.com/in/eduardo-lopez-rosado-99b678382" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/eddiewithaneye" target="_blank">Github</a></li>
            </ul>
        </section>
    );
}