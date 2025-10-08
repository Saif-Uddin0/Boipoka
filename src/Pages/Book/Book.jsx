// import React, { use } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    
    return (
        <Link to={`bookDetails/${singleBook.bookId}`}>
            <div >
                <div className="card w-90 h-[480px]  shadow-sm p-5 rounded-2xl container mx-auto">
                    <figure className='bg-gray-100 p-5 rounded-lg flex items-center justify-center'>
                        <img
                            className='w-54 object-contain h-full'
                            src={singleBook.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="border-b border-dashed border-gray-300 ">
                            <div className="flex items-center gap-3 ">
                                <div className="badge text-[#23BE0A] badge-success border-none bg-green-50 p-2">Young Adult</div>
                                <div className="badge text-[#23BE0A] badge-success border-none bg-green-50 p-2 ">Identity</div>
                            </div>
                            <h2 className="card-title text-xl font-semibold mt-3 mb-1.5">
                                {singleBook.bookName}

                            </h2>
                            <p className="mb-5 font-semibold">By : {singleBook.author}</p>
                        </div>

                        <div className="flex justify-between mt-1">
                            <p className="font-semibold">{singleBook.category}</p>
                            <div className='flex items-center justify-between gap-1 font-semibold'>
                                <p>{singleBook.rating}</p>
                                <Star className='h-4.5'></Star>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </Link>
    );
};

export default Book;