import { useState } from 'react'






function Products()  {
    const [content, setContent] = useState(<ProductList showList={showList} />)

    function showList() {
        setContent(<ProductList showList={showList} />)
    }

    function showForm() {
        setContent(<ProductForm showForm={showForm} />);
    }

    return (
        <>
            <div className="container my-5">
                {content}


            </div>

        </>
    )
}

export function ProductList(props) {
    return (
        <>
            <h2 className="text-center mb-3"> List of Products</h2>
            <button onClick={() => props.showForm()} type='button' className="btn btn-primary me-2">Create</button>




        </>
    )

}
export function ProductForm(props) {
    return (
        <>
            <h2 className="text-center mb-3">Create New Product</h2>
            <button onClick={() => props.showList()} type='button' className="btn btn-secondary me-2">Cancel</button>
        </>
    )

}

export default Products
