import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const idInt = parseInt(id)
    const singleBook = data.find(book => book.bookId === idInt)
    
      if (!singleBook) {
    return <div className="text-center py-10">Book not found.</div>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;



    return (
        <div class="min-h-screen flex flex-col md:flex-row justify-center items-center  container mx-auto my-20">
      <div class="bg-white shadow-md rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {/* Book Image */}
        
            <div class="bg-gray-100 p-5 rounded-lg flex items-center justify-center">
          <img
            src={image || "https://via.placeholder.com/250x350"}
            alt={bookName}
            class="w-80 h-auto shadow-lg rounded-md object-cover"
          />
        

        </div>
        {/* Book Info */}
        <div>
          <h1 class="text-2xl font-semibold mb-2">{bookName}</h1>
          <p class="text-lg text-gray-700 font-semibold mb-1">By <span class="text-gray-900 font-medium">{author}</span></p>
          <div class="border-t  border-gray-300 my-4"></div>
          <p class="text-gray-600 font-semibold mb-4">{category}</p>

          <div class="border-t  border-gray-300 my-4"></div>

          <p class="text-gray-700">
            <span class="font-semibold">Review:</span> {review}
          </p>

          <div class="mt-4">
            <h2 class="font-semibold text-gray-700 mb-2">Tags:</h2>
            <div class="flex gap-2 flex-wrap">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tags}
                </span>
              ))}
            </div>
          </div>

          <div class="mt-6 space-y-1">
            <p><span class="font-medium">Number of Pages:</span> {totalPages}</p>
            <p><span class="font-medium">Publisher:</span> {publisher}</p>
            <p><span class="font-medium">Year of Publishing:</span> {yearOfPublishing}</p>
            <p><span class="font-medium">Rating:</span>{rating}</p>
          </div>

          <div class="mt-6 flex gap-4">
            <button class="btn text-black px-5 py-2 rounded-md hover:bg-gray-700 hover:text-white">
              Read
            </button>
            <button class="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BookDetails;