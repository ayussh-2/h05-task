async function Page({ params }) {
    const { id } = await params;
    return <div>Product:- {id}</div>;
}

export default Page;
