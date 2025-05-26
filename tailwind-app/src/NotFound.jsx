function NotFound(){

    return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-2">Página no encontrada</p>
      <a href="/" className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        Volver a inicio
      </a>
    </div>
  );

}
export default NotFound;