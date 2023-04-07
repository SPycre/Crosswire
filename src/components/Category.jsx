import '../style/Category.css'

function Category({title, longtitle, description}) {

    return (
        <section className='category'>
            <span className="large category-title">{title}</span>
            <br/>
            <p>
                <span className="medium">{longtitle}</span>
                <br/>
                <span className="large description">{description}</span>
            </p>
        </section>
    );
}

export default Category;