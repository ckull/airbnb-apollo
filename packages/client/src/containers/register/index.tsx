
import RegisterForm from 'components/registerForm'

const Register = () => {

    const handleSubmit = (data: object) => {
        console.log(data)
    }
    return (
        <div className="container max-w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-xs">
                <RegisterForm onSubmit={handleSubmit}/>
            </div>
        </div>


    )
}

export default Register