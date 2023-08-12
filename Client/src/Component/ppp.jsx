import "./Profile.css"

const Fill = () => {
    return (
        <div class="mainContainer" id="container">
                    <div class="hello">
                        <h1>HELLO</h1>
                        <h1>Login!</h1>
                    </div>
                    <div class="mainForm">
                        <h1>Login here</h1>
                        <form action=""/>
                    
                    <label for="username"></label>
                    <input type="text" placeholder="Email or username" id="email"/>
                    <label for="password"></label>
                    <input type="password" placeholder="password" id="password"/>
                    <button id="login">Login in</button>
                    <div id="error">Login failed</div>
                        
                    </div>
        
        </div>
    )
}

export default Fill