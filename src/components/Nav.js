import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './Auth';

export class Nav extends Component {
    render = () => {
        return (
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                            <div className="flex items-center flex-shrink-0 text-white mr-6">
                                <span className="font-semibold text-xl tracking-tight">
                                    NoobsWelcome
                                </span>
                            </div>
                            <div className="block lg:hidden">
                                <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                                    <svg
                                        className="fill-current h-3 w-3"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                <div className="text-sm lg:flex-grow" />
                                <div>
                                    {!user && (
                                        <>
                                            <NavLink
                                                to="/login"
                                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue border-white hover:border-transparent
                                                hover:text-blue-500 
                                                bg-white mt-4 mr-4 lg:mt-0"
                                            >
                                                Log In
                                            </NavLink>
                                            <NavLink
                                                to="/register"
                                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                                            >
                                                Sign Up
                                            </NavLink>
                                        </>
                                    )}
                                    {user && (
                                        <>
                                            <NavLink
                                                to="/logout"
                                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                                            >
                                                Logout
                                            </NavLink>
                                        </>
                                    )}
                                </div>
                            </div>
                        </nav>
                    );
                }}
            </UserContext.Consumer>
        );
    };
}
