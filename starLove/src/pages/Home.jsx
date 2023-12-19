import "./Home.css"

function Home() {
    return (
    <div>
        <div className="Welcome">
        <h1>WELCOME !</h1>
        </div>
           <div className="Description">
            <h2>Reserve your life-changing journey to the edge of space today with a right partner!</h2>
           </div>
        <div className="Register">
        <h2>REGISTRATION</h2>
        <form>
            <h4>Email</h4>
            <textarea className="Email">Write here....</textarea>
        </form>
        <form>
            <h4>Password</h4>
            <textarea className="Password">Write here....</textarea>
        </form>
    <button class="Submit" type="button">Submit</button>
     </div>
    </div>
    );
}

export default Home;
