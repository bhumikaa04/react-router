import React, { useState } from 'react';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md w-80">
                {/* Toggle Buttons */}
                <div className="flex justify-between mb-6">
                    <button
                        className={`w-1/2 py-2 rounded-t-lg ${
                            isLogin ? 'bg-orange-800 text-white' : 'bg-gray-200'
                        }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`w-1/2 py-2 rounded-t-lg ${
                            !isLogin ? 'bg-orange-800 text-white' : 'bg-gray-200'
                        }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {/* Form */}
                {isLogin ? (
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-4">Login Form</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 mb-3 border border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 mb-3 border border-gray-300 rounded"
                        />
                        <a href="#" className="text-orange-700 text-sm text-right mb-3">
                            Forgot Password?
                        </a>
                        <button className="py-2 bg-orange-800 text-white rounded">Login</button>
                        <p className="text-center mt-4 text-sm">
                            Not a member?{' '}
                            <a
                                href="#"
                                className="text-orange-700"
                                onClick={() => setIsLogin(false)}
                            >
                                Signup now
                            </a>
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-4">Signup Form</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 mb-3 border border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 mb-3 border border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="p-2 mb-3 border border-gray-300 rounded"
                        />
                        <button className="py-2 bg-orange-800 text-white rounded">Signup</button>
                        <p className="text-center mt-4 text-sm">
                            Already a member?{' '}
                            <a
                                href="#"
                                className="text-orange-700"
                                onClick={() => setIsLogin(true)}
                            >
                                Login now
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
