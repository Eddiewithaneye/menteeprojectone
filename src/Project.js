// I am creating my Project component here.
export default function Project(props) {
    // I need a keyword here to tell React to render the HTML code below.
    return (
        // Let's start building out are JSX code here.
        <section>
        <h3>{props.title} </h3>
        <p>{props.description} </p>
        <img src={props.image} alt={props.title} />
        <a href={props.link}> View Project</a>
         </section>
    )
}