import { X } from "lucide-react";

interface Props {
    onClose: () => void,
    openSignIn: () => void
}

const SignUp = ({ onClose, openSignIn }: Props) => {

    const handleSignIn = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('email');
        const password = formData.get('password');
        console.log('Sign In Attempt:', { username, password });
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Sign Up</h2>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        {<X className="w-6 h-6" />}
                    </button>
                </div>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-white/80 mb-2">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white/80 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-white/70 text-center mt-4">
                    Already have an account?{" "}
                    <button onClick={ ()=>{
                        onClose();
                        openSignIn();
                    }
                    } className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    )
}

export default SignUp