import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContect } from '../../providers/AuthProvider';


const SignUp = () => {


    const { createUser } = useContext(AuthContect)

    const handleSignUp = event => {



        event.preventDefault();
        console.log('clicked');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(err => console.log(err))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 border-none hover:bg-orange-700 text-lg text-white font-bold" type="submit" value="Sign Up" />
                        </div>
                        <p className='text-center my-4'>Already Have an Account <Link className='text-orange-600 underline font-bold' to='/login'>Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;