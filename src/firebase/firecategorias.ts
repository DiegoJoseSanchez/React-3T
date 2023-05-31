import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./firebaseconf"; 
import { ICategoria } from "../Interfaces/4s";
import { nanoid } from 'nanoid'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore() 


//AÑADIR CATEGORIA
export const newCategoria = async (data: ICategoria) => {
    try{
        console.log('Insertando en FB el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "4story", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}


//LISTADO DE CATEGORIAS
export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = [];
    const categoriasRef = collection(db, "4story"); 
    const CategoriasDocs = await getDocs(categoriasRef) 
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}

// ELIMINAR CATEGORIA
export const delproduct = async (codigo: string) => {
    try {
      const delRef = doc(db, "4story", codigo);
      await deleteDoc(delRef);
      window.location.reload();
      console.log("Eliminado correctamente");
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar la categoría");
    }
  };
 
