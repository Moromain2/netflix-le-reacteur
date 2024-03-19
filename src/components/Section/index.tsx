// CSS import for component
import './section.css';

// Specifying props types
interface section_props {
    title: string;
    images_array: string[];
}

const Section = ({title, images_array}: section_props) => {
    return (
        // Section ID is named after the category title with whitespaces replaced by a dash
        <section className='category-section' id={title.replace(/\s/g, "-").toLowerCase()}>
            <div className="container">
                <h2>{title}</h2>
                <div className="images-wrapper">
                    {images_array.map((image_url, index) => {
                        return (
                            <img key={index} src={image_url} alt={`Affiche du film ${title}`} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Section;