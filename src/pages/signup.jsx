import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function SignUp(props) {
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const navigate = useNavigate()

    const users = props.users
    const setUsers = props.setUsers

    function handleUInput(e) {
        setEusername(e.target.value)
    }

    function handlePInput(e) {
        setEpassword(e.target.value)
    }

    function handleCInput(e) {
        setcpassword(e.target.value)
    }

    function isUsernameValid(username) {
        const usernameRegex = /^[a-zA-Z0-9]{3,20}$/
        return usernameRegex.test(username)
    }

    function isPasswordValid(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRegex.test(password)
    }

    function adduser() {
        if (!isUsernameValid(eusername)) {
            setErrorMessage("Invalid username format.")
            return
        }
        if (!isPasswordValid(epassword)) {
            setErrorMessage("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.")
            return
        }
        if (epassword !== cpassword) {
            setErrorMessage("Passwords do not match")
            return
        }
        setUsers([...users, { username: eusername, password: epassword }])
        setSuccessMessage("Account has been successfully created! Redirecting to login page...")
        setTimeout(() => {
            navigate("/")
        }, 3000) // 3 seconds delay before redirecting
    }

    return (
        <div className="bg-[#909E84] p-10 max-sm:text-center items-center max-md:p-5">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium max-md:text-xl">Hey Hi</h1>
                <p className="max-md:text-lg">I help You manage activities after you login :)</p>
                <div className="flex flex-col gap-2 my-2 ">
                    <input type="text" placeholder="UserName" onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md max-sm:pr-3"></input>
                    <input type="password" placeholder="Password" onChange={handlePInput} className="w-52 border-black p-1 bg-transparent border rounded-md max-sm:pr-3"></input>
                    <input value={cpassword} type="password" placeholder="Confirm Password" onChange={handleCInput} className="w-52 border-black p-1 bg-transparent border rounded-md max-sm:pr-3"></input>
                    {errorMessage && (<p className="text-red-500">{errorMessage}</p>)}
                    {successMessage && (<p className="text-green-500">{successMessage}</p>)}
                    <button onClick={adduser} className="bg-[#BB8644] w-24 p-1 rounded-md">Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
