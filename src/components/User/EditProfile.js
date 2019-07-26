import React, { Component } from 'react';

export default class EditProfile extends Component {
    render() {
        return (
            <form action="">
                <label className="block text-gray-700 text-sm font-bold mb-2" >First Name</label>
                <input type="text" name="firstname" />
                <label className="block text-gray-700 text-sm font-bold mb-2" >Last Name</label>
                <input type="text" name="lastname" />
                <label className="block text-gray-700 text-sm font-bold mb-2" >Username (max 12 characters)</label>
                <input type="text" name="username" maxlength="12" />
                <label className="block text-gray-700 text-sm font-bold mb-2" >Password: (max 16 characters)</label>
                <input type="password" name="password" />
                {/* Interests / Skills:
                <input type="checkbox" name="interest1" value="Python" /> Python
                <input type="checkbox" name="interest2" value="Java" /> Java
                <input
                    type="checkbox"
                    name="interest3"
                    value="DatabaseMGMT"
                />{' '}
                Database Management
                <input
                    type="checkbox"
                    name="interest4"
                    value="Developer"
                />{' '}
                Software Development */}
                <label className="block text-gray-700 text-sm font-bold mb-2"
                >Bio</label>
                <textarea name="bio" rows="10" cols="30" className="shadow appearance-none border rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <label className="block text-gray-700 text-sm font-bold mb-2" >Experience:</label>
                <select>
                    <option value="< 1">{`< 1 yrs`}</option>
                    <option value="1-3">{`1-3 yrs`}</option>
                    <option value="3-5">{`3-5 yrs`}</option>
                    <option value="5-10">{`5-10 yrs`}</option>
                    <option value="5+">{`5+ yrs`}</option>
                </select>
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" >City</label>
                <input type="text" name="city" />
                <label className="block text-gray-700 text-sm font-bold mb-2" >State</label>
                <input type="text" name="state" />
                <datalist id="state">
                    <option value="Alabama" />
                    <option value="Arkansas" />
                    <option value="Tennessee" />
                    <option value="Mississippi" />
                    <option value="California" />
                    <option value="Nevada" />
                </datalist> */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save
                </button>
            </form>
        );
    }
}
