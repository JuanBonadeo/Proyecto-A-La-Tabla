import React, { useState } from 'react';
import './admins.css';
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../services/firebase/firebaseConfig';
import Swal from 'sweetalert2';

export const Admin = () => {
    const [image1, setImg1] = useState(null);
    const [image2, setImg2] = useState(null);
    const [image3, setImg3] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagePreview1, setImagePreview1] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');
    const [imagePreview3, setImagePreview3] = useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    };

    const handlePrecio = (e) => {
        setPrecio(e.target.value);
    };

    const handleDescripcion = (e) => {
        setDescripcion(e.target.value);
    };

    const handleImageChange = (setImage, setImagePreview) => (e) => {
        const file = e.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const uploadImage = async (productFolderRef, image) => {
        if (image) {
            const imageRef = ref(productFolderRef, image.name);
            await uploadBytesResumable(imageRef, image);
            return await getDownloadURL(imageRef);
        }
        return '';
    };

    const addProduct = async (e) => {
        e.preventDefault();
        const productFolderRef = ref(storage, `products/${nombre}`);

        const imageUrl1 = await uploadImage(productFolderRef, image1);
        const imageUrl2 = await uploadImage(productFolderRef, image2);
        const imageUrl3 = await uploadImage(productFolderRef, image3);

        const nombreProducto = nombre.toUpperCase().replace(/\s+/g, '-');

        const nuevoProducto = {
            nombre: nombre,
            precio: parseInt(precio),
            descripcion: descripcion,
            img1: imageUrl1,
            img2: imageUrl2,
            img3: imageUrl3,
        };

        const productRef = doc(db, 'products', nombreProducto);
        setDoc(productRef, nuevoProducto)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al agregar producto',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div className="adminContainer">
            <form className="adminForm" onSubmit={addProduct}>
                <h1>Administrar Productos</h1>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required value={nombre} onChange={handleNombre} />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" required value={precio} onChange={handlePrecio} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea type="text" id="descripcion" name="descripcion" required value={descripcion} onChange={handleDescripcion} />
                </div>
                
                <label htmlFor="imagen1">Imagen 1:</label>
                <input type="file" id="img1" name="imagen1" onChange={handleImageChange(setImg1, setImagePreview1)} />
                {imagePreview1 && <img src={imagePreview1} alt="Preview" style={{ maxWidth: '100px' }} />}
                
                <label htmlFor="imagen2">Imagen 2:</label>
                <input type="file" id="img2" name="imagen2" onChange={handleImageChange(setImg2, setImagePreview2)} />
                {imagePreview2 && <img src={imagePreview2} alt="Preview" style={{ maxWidth: '100px' }} />}
                
                <label htmlFor="imagen3">Imagen 3:</label>
                <input type="file" id="img3" name="imagen3" onChange={handleImageChange(setImg3, setImagePreview3)} />
                {imagePreview3 && <img src={imagePreview3} alt="Preview" style={{ maxWidth: '100px' }} />}
                
                <button className="Button" type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default Admin;


