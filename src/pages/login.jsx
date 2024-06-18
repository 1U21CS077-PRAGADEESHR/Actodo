import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    const [ruser, setruser] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const users = props.users

    function handleUInput(e) {
        setEusername(e.target.value)
    }

    function handlePInput(e) {
        setEpassword(e.target.value)
    }

    function isUsernameValid(username) {
        const usernameRegex = /^[a-zA-Z0-9]{3,20}$/
        return usernameRegex.test(username)
    }

    function isPasswordValid(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRegex.test(password)
    }

    function checkUser() {
        if (!isUsernameValid(eusername) || !isPasswordValid(epassword)) {
            setErrorMessage("Invalid username or password format.")
            setruser(false)
            return
        }

        var userfound = false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                userfound = true
                navigate("/landing", { state: { user: eusername } })
            }
        })
        if (!userfound) {
            setErrorMessage("Invalid username or password.")
            setruser(false)
        }
    }

    return (
        <div className="bg-[#909E84] p-10 max-sm:text-center items-center max-md:p-4">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi👋</h1>
                {ruser ? (
                    <p>I help You manage your activities after you Login :)</p>
                ) : (
                    <p className="text-red-500">{errorMessage}</p>
                )}
                <div className="flex flex-col gap-2 my-2 ">
                    <input onChange={handleUInput} value={eusername} type="text" placeholder="UserName" className="w-52 border-black p-1 bg-transparent border rounded-md max-sm:pr-3"></input>
                    <input onChange={handlePInput} value={epassword} type="password" placeholder="Password" className="w-52 border-black p-1 bg-transparent border rounded-md max-sm:pr-3"></input>
                    <button onClick={checkUser} className="bg-[#E3D477] w-24 p-1 rounded-md">Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
