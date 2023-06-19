import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./firebaseconf"; 
import { nanoid } from 'nanoid'
import datos from '../datos/datos.json'
import { Eventos } from "./categorias"


export const app = initializeApp(firebaseConfig)
export const db = getFirestore() 


//AÑADIR CATEGORIA
export const newEvento = async (data: Eventos) => {
    try{
        console.log('Insertando en FB el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "eventos", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}


//LISTADO DE CATEGORIAS
export const getEvento = async ():Promise<Eventos[]> => {
    let categorias: Eventos[] = [];
    const categoriasRef = collection(db, "eventos"); 
    const CategoriasDocs = await getDocs(categoriasRef) 
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as Eventos)
    });
    console.log(categorias);
    return categorias;
}

// ELIMINAR CATEGORIA
export const delEvento = async (codigo: string) => {
    try {
      const delRef = doc(db, "eventos", codigo);
      await deleteDoc(delRef);
      window.location.reload();
      console.log("Eliminado correctamente");
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar la categoría");
    }
  };
 
  export const masEvento = async () => {
    try {
        console.log('carga de datos...');
        datos.map(async (datos) => {
            const codigo = nanoid(20);
            const docRef = doc(db, "eventos", codigo);
            await setDoc(docRef, { codigo: codigo, ...datos });
            window.location.reload();
        });
    } catch (error) {
        console.log(error);
    }
};
