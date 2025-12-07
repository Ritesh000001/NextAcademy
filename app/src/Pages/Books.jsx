import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [numFound, setNumFound] = useState(0);
  const [titleQuery, setTitleQuery] = useState("");
  const [authorQuery, setAuthorQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);

    try {
      let query = "";
      if (titleQuery || authorQuery) {
        if (titleQuery) query += `title=${encodeURIComponent(titleQuery)}`;
        if (authorQuery) {
          query += (query ? "&" : "") + `author=${encodeURIComponent(authorQuery)}`;
        }
      } else {
        // Default query for study-related books
        query =
          "q=computer+science+OR+physics+OR+chemistry+OR+mathematics+OR+programming+OR+AI+OR+machine+learning+OR+database+OR+networking+OR+OOP+OR+DSA";
      }

      const res = await axios.get(
        `https://openlibrary.org/search.json?${query}&page=${page}`
      );

      // ✅ Keep only fully readable books
      const readableBooks = res.data.docs.filter(
        (book) => book.ia && book.ia.length > 0
      );

      setBooks(readableBooks);
      setNumFound(res.data.numFound);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, [page]);

  const totalPages = Math.ceil(numFound / 100); // OpenLibrary gives 100 results per page

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Study Resources / Books</h2>

      {/* Search Inputs */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Book Name"
          value={titleQuery}
          onChange={(e) => setTitleQuery(e.target.value)}
          className="p-2 rounded-lg w-1/3 bg-white border border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Search by Author Name"
          value={authorQuery}
          onChange={(e) => setAuthorQuery(e.target.value)}
          className="p-2 rounded-lg w-1/3 bg-white border border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <button
          onClick={() => {
            setPage(1);
            fetchBooks();
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-40 text-xl font-semibold">
          Loading Books...
        </div>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-500">No books available</p>
      ) : (
        <>
          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
              >
                <img
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : "https://via.placeholder.com/150"
                  }
                  alt={book.title}
                  className="w-32 h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-center">{book.title}</h3>
                <p className="text-sm text-gray-600">
                  {book.author_name ? book.author_name.join(", ") : "Unknown"}
                </p>
                <button
                  onClick={() =>
                    setSelectedBook(
                      `https://archive.org/embed/${book.ia[0]}?ui=embed#mode/2up`
                    )
                  }
                  className="mt-3 bg-green-600 text-white px-3 py-2 rounded-lg"
                >
                  Read Book
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Popup Reader */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 h-5/6 relative rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
            >
              Close
            </button>
            <iframe
              src={selectedBook}
              title="Book Reader"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
