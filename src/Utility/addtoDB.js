const getStoredBook =() =>{
    const storedBookSTR  = localStorage.getItem('readlist')
    if(storedBookSTR){
        const storeBook = JSON.parse(storedBookSTR);
        return storeBook;
    }
    else{
        return [];
    }
}

export const addToStoredDB =(id) =>{
    const storeBook = getStoredBook();
    if(storeBook.includes(id)){
        alert('This item already added')
    }
    else{
        storeBook.push(id);
        const data = JSON.stringify(storeBook);
        localStorage.setItem('readlist', data)
    }
}