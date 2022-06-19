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
        let value = false;
        if (username == "rijul" && password.value == "rijul") {
            value = true;
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
    if (session == 'true') {
        return <HomePage />
    }

    return (
        <div className="login">
            <div className="mobile">mobile</div>
            <div className='loginForm'>
                <div style={{textAlign:'center'}}>Instagram</div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" name="username" placeholder="Phone number, username or email" value={username} onChange={e => setUsername(e.target.value)} required /><br />
                    <input type={password.type} name="password" placeholder="Password" value={password.value} onChange={e => setPassword({ ...password, value: e.target.value })} required /><button type="button" onClick={handleClick}>Show</button><br />
                    <input type="submit" value="Log In" />
                </form>
                <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522npnp2f1flel3o1mt4p9cnzq8g6xxe7fm62uhp3mgqb2u1cnpmrr%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df935955b-a924-4d20-bfd8-4af029ee5492%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522npnp2f1flel3o1mt4p9cnzq8g6xxe7fm62uhp3mgqb2u1cnpmrr%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0'>Log in with Facebook</a>
            </div>
        </div>
    )

}