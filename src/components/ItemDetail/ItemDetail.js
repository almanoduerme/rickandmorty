import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "../../context/APIContext";
import Item from "../Item/Item";

const ItemDetail = () => {
  const { characterData, param, setParam } = useContext(APIContext);
  const { id } = useParams();

  useEffect(() => {
    setParam(id - 1);
  }, [id, setParam]);

  return (
    <div>
      {characterData[param] ? (
        <Item character={characterData[param]} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ItemDetail;