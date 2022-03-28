import { useState, useEffect } from 'react';
import HomePage from '../Home/homePage';

export default function Login() {

    const [loaded, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState({ value: "", type: "password" });   
    const [session, setSession] = useState(null);

    useEffect(() => {
        const timeoutID = setTimeout(() => setLoading(true), 1000);
        return () => clearTimeout(timeoutID);
    });

    function setSessionId() {
        window.cookieStore.get('SessionId').then(cookies => {
            try {
                setSession(cookies.value)
            } catch (e) {
                console.log(e);
            }
        });
    }
    setSessionId();
    

    function handleSubmit(e) {
        e.preventDefault();
        var now = new Date();
        now.setTime(now.getTime() + (1 * 24 * 60 * 60 * 1000)); 
        let value=false;
        if(username=="rijul" && password.value=="rijul"){
            value=true;
        }    
        window.cookieStore.set({
            name: 'SessionId',
            value,
            path: '/',
        });
        setSessionId();
    }

    function handleClick() {
        if (password.type === "password") {
            setPassword({ ...password, type: "text" });
        } else {
            setPassword({ ...password, type: "password" });
        }
    }

    if (!loaded) {
        return (
            <>
                Loading....
            </>
        )
    }
    console.log(session);
    if (session=='true') {
        return <HomePage />
    }

    return (
        <div className="login">
            <div className="photo">mobile</div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="username" placeholder="Phone number, username or email" value={username} onChange={e => setUsername(e.target.value)} required /><br />
                <input type={password.type} name="password" placeholder="Password" value={password.value} onChange={e => setPassword({ ...password, value: e.target.value })} required /><button type="button" onClick={handleClick}>Show</button><br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    )

}