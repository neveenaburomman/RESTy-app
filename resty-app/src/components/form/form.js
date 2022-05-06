import './form.css'

function Form() {
    return (

        <form className="form">
            <input type="url" id="link" name="link" placeholder="http://api.url.here"></input>
            <input type="submit" value="GO!" />

            <br></br>

            <div id='methods'>
                <input type="radio" id="GET" name="METHODS" value="GET" /> <label for="GET">GET</label>
                <input type="radio" id="POST" name="METHODS" value="POST" /><label for="POST">POST</label>
                <input type="radio" id="PUT" name="METHODS" value="PUT" /><label for="PUT">PUT</label>
                <input type="radio" id="DELETE" name="METHODS" value="DELETE" /> <label for="DELETE">DELETE</label>
            </div>

                <textarea> </textarea>
        </form>



    )
}


export default Form;