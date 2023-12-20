import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'


const Login = () => {

    

    const handleLogin = event =>{
        event.preventDefault();
        console.log('clicked');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login!</h1>
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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 border-none hover:bg-orange-700 text-lg text-white font-bold" type="submit" value="Login" />
                        </div>
                    <p className='text-center my-4'>New to Car Doctors <Link className='text-orange-600 underline font-bold' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;