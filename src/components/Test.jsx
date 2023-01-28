import { useState } from "react";
import { useQuery } from "react-query";

export const Test = () => {
  const [page, setPage] = useState(0);
  const urlApi = "http://localhost:8000";

  const getProducts = async ({ queryKey }) => {
    /* QueryKey en la posicion [1] nos trae 'page', esto se utiliza
	para no usarlo en el refresh del estado y poder dejarlo en cache */
    const response = await fetch(
      `${urlApi}/user/1/purchases?limit=5&offset=${queryKey[1]}`
    );
    if (!response.ok) {
      throw new Error("error");
    } else {
      return response.json();
    }
  };
  //Esperar res y status + Asignacion nombre clave y page
  const { data, status } = useQuery(["products", page], getProducts);

  if (status === "loading") {
    return <p>Obteniendo informacion...</p>;
  }
  if (status === "error") {
    return <p>Error</p>;
  }

  //Accedemos a el resultado del data
  const productItems = data.data.data;
  //Calcular cantidad de paginas
  const cantPaginas = data.data.total / data.data.limit;
  //Creamos array dinamico con las paginas calculadas
  let arrayPaginas = Array.from({ length: cantPaginas }, (_, i) => i + 1);

  return (
    <div>
      {productItems.map((element, index) => (
        <p key={index}>{element.titulo}</p>
      ))}
      {arrayPaginas.map((element, index) => (
        <button key={element} onClick={() => setPage(index * 5)}>
          {element}
        </button>
      ))}
    </div>
  );
};
