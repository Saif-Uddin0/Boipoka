import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // const [Allbooks , setAllBooks] = useState([])

    // useEffect ( () => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // },[])

    // const bookPromise = fetch('/booksData.json').then(res=> res.json())

    return (
        <div className=' container mx-auto'>
            <h1 className='text-center'>Hello I am books</h1>
            <Suspense fallback={<span>Loading....</span>}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center my-20'>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;