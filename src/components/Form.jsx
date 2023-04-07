import "../style/Form.css"

function Form() {

    const inputs = [
        (<input type="text" name="first"></input>),
        (<input type="text" name="last"></input>),
        (<input type="text" name="company"></input>),
        (<input type="number" name="employees"></input>),
        (<input type="email" name="mail"></input>),
    ]

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <div className="form-container">
            <span className="form-text">Sign up to harness the power of Crosswire.</span>
            <form className="form-signup">
                {inputs[0]}
                <input type="submit" onClick={handleSubmit}></input>
            </form>
        </div>
    )

}

export default Form