import React from 'react'

export default function BookTable(props) {
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {
                    props.books.map((book) => {
                        return <tr key={book.isbn}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>
                                <button className='btn btn-danger btn-sm'
                                    onClick={ () => props.onBookDelete(book)}
                                >Delete</button>

                                <button className='btn btn-warning btn-sm'
                                    onClick={() => props.onBookEdit(book)}
                                >Edit</button>
                            </td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
