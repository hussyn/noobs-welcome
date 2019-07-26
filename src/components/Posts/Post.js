import React from 'react';
import profile from '../../profile-placeholder.png';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Post({ post }) {
    return (
        <div class="rounded overflow-hidden shadow-lg p-4 my-2 bg-gray-200 item">
            <div class="font-bold mb-2 flex ">
                <ul class="flex justify-between">
                    <li class="mr-5">
                        <div class="flex items-center">
                            <img
                                class="w-10 h-10 rounded-full mr-4"
                                src={post.image || profile}
                                alt="User Profile Avatar"
                            />
                            <div class="text-sm">
                                <a
                                    href={`/users/${post.username}`}
                                    class="bg-transparent hover:bg-blue-500 text-xs text-blue-700 font-semibold hover:text-white cursor-pointer
                                            py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                >
                                    {post.username}
                                </a>
                            </div>
                        </div>
                    </li>
                    {/* <li class=" justify-end mt-2">
                        <p class="text-black hover:text-blue-500">Interests</p>
                    </li> */}
                </ul>
            </div>
            <p>{post.story}</p>

            <div class="flex justify-between">
                <button>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <p class="text-gray-800 text-sm mt-2">
                    Sent at {post.createdAt}
                </p>
            </div>
        </div>
    );
}
