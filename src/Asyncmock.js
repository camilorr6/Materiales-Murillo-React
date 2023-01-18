const products =
    [
        {
        "id": 1,
        "nombre": "Taladro Inalámbrico Percutor 12v 3/8 Ion De Litio Stanley",
        "descripcion": "Motor de alto rendimiento, Potencia de 12 Volts Max. 2 Baterías de 1.5 Ah, Diseño compacto y liviano, recubierto en goma, 20 posiciones de torque,Transmisión de 2 Velocidades",
        "category": "herramientas-y-maquinaria", 
        "stock": 80,
        "precio": 500000,
        "img": "../img/taladro.jpg"
        
    },
    {
        "id": 2,
        "nombre": "Cemento Gris Uso General 50 Kilos Argos",
        "descripcion": "El Cemento Argos de Uso General es el resultado de la molienda de clínker, yeso y adiciones minerales, en las proporciones óptimas para la obtención de un moderado desarrollo de resistencias tempranas.",
        "category": "construccion",
        "stock": 80,
        "precio": 27000,
        "img": "../img/bolsa-de-cemento.webp"
        
    },
    {
        "id": 3,
        "nombre": "Estucomastic Blanco 180,70 Caneca 27kg Pintuco",
        "descripcion": "Estucomastic 2 en 1 es una masilla plástica lista para usar, con doble funcionalidad ya que puede usarse como estuco interior y como masilla para tratamiento de juntas en placas de yeso (drywall). De excelente adherencia, alto poder de relleno, fácil aplicación y lijado.",
        "category":"construccion",
        "stock": 80,
        "precio": 40000,
        "img": "../img/galon-de-pintura.jpg"
    },
    {
        "id": 4,
        "nombre": "Combo Laguna Blanco C/Pedestal C/Asiento Boton Superior Corona",
        "descripcion": "El Sanitario Laguna cuenta con diseño tradicional de dos piezas (tanque y taza), el perfil de su taza es redondo y tiene una altura tradicional para uso familiar, su sistema de accionamiento es de botón sencillo tipo push, que te garantizará una descarga eficiente en cada uso.",
        "category": "hogar",
        "stock": 80,
        "precio": 332484,
        "img": "../img/inodoro.jpg"
    },
    {
        "id": 5,
        "nombre": "Teja Ondulada N° 4 P7 Eternit",
        "descripcion": "Para cubiertas de todo tipo de construcción, o también un cubrimiento de fachadas.",
        "category":"construccion",
        "stock": 80,
        "precio": 20000,
        "img": "../img/teja.jpg"
        
    },
    {
        "id": 6,
        "nombre": "Lavaplatos Radiante Acero Inoxidable Poceta 100 X 52 Socoda",
        "descripcion": "Lavaplatos en acero inoxidable con 2 funciones en una: lavado, zona de trabajo con declive para escurrir el agua a la poceta. Ofrece un espacio funcional y cómodo para trabajar, posee un lavaplatos amplio con 13.7cm de profundidad para evitar salpiques de agua y con mayor amplitud para lavar, y una zona de trabajo con declive para escurrir el agua al tanque.",
        "category": "hogar",
        "stock": 80,
        "precio": 115000,
        "img": "../img/lavaplatos-radiante-acero-inoxidable-poceta-derecha-100-x-52-monocontrol-socoda.jpg"
        
    },
    {
        "id": 7,
        "nombre": "Cerradura De Sobreponer 106-70 Izquierda 2 Bulones Yale",
        "descripcion": "Para puertas de 30mm a 70mm de espesor, caja cantonera y contratapa de soldar en acero, sistema antipalanca, pestillo en zamak, sistema antipalanca, cubierta adicional contra aperturas forzosas.",
        "category": "hogar",
        "stock": 80,
        "precio": 100000,
        "img": "../img/cerradura-de-sobreponer-107-70-izquierda-2-bulones-yale.jpg"
    },
    {
        "id": 8,
        "nombre": "Sika Emulsion 5/1 Asfaltica",
        "descripcion": "La Emulsión Asfáltica Sika® forma con el producto SikaFelt (tela de fibra de poliéster, refuerzo) un sistema para impermeabilizar.",
        "category":"construccion",
        "stock": 80,
        "precio": 173000,
        "img": "../img/sika-emulsion-51-asfaltica-x-18-kilos.jpg"
        
    },
    {
        "id": 9,
        "nombre": "Protector De Voltaje Enchufable Nevera 120V Nicomar.",
        "descripcion": "Ideal para el hogar, industria y oficina, protegiendo sus equipos contra los picos de voltaje que encontramos en la red eléctrica. El protector electrónico de voltaje ha sido diseñado para evitar que los disturbios presentes en la red eléctrica puedan afectar el buen funcionamiento de los equipos.",
        "category": "hogar",
        "stock": 80,
        "precio": 26000,
        "img": "../img/protector-de-voltaje-enchufable-nevera-120v-nicomar.jpg"
    },
    {
        "id": 10,
        "nombre": "Cerradura Yale Digital Pantalla Tactil ",
        "descripcion": "La cerradura digital de embutir YMF30 con capacidad para 40 tarjetas y 30 códigos pin. Además puede ser operada desde el celular a través de Yale Connect hub. Medidas 320x68.",
        "category": "hogar",
        "stock": 80,
        "precio": 1600000,
        "img": "../img/cerradura-digital-pantalla-tactil-ymf30-yale.jpg"
    },
    {
        "id": 11,
        "nombre": "Escalera Aluminio Tijera 3 Peldaños 90kg (Verde) Escalumex",
        "descripcion": "Disfruta de la máxima calidad y tecnología con la escalera multiuso aluminum, Rígidas y de alta resistencia, Estructura totalmente en aluminio, 3 Peldaños planos en aluminio antideslizante, Cabezote superior en Aluminio, Zapatas en caucho antideslizante acanaladas.",
        "category": "herramientas-y-maquinaria",
        "stock": 80,
        "precio": 160000,
        "img": "../img/escalera-aluminio-tijera-3-peldanos-1-22-mts-bstl-4-tipo-iii-90kg-verde-escalumex.jpg"
        
    },
    {
        "id": 12,
        "nombre": "Pulidora Profesional 7'' 8500 2200 W RPM Dewalt",
        "descripcion": "Potente motor protegido contra la abrasión que aumenta su durabilidad. Mango auxiliar de dos posiciones para mayor comodidad. Traba de eje para un sencillo cambio de disco. Ventana para fácil acceso y reemplazo de carbones.",
        "category": "herramientas-y-maquinaria",
        "stock": 80,
        "precio": 750000,
        "img": "../img/pulidora-profesional-7-8500-2200-w-rpm-dewalt-dwe491-b3-.jpg"
        
    },
    {
        "id": 13,
        "nombre": "Subconjunto Grival Griferia Lavaplato Triceta",
        "descripcion": "Grifería plástica de 8 pulgadas para cocina inspirada en el proceso natural y orgánico de la erosión aluvial.",
        "category": "hogar",
        "stock": 80,
        "precio": 70000,
        "img": "../img/subconjunto-grival-griferia-lavaplato-sencilla-triceta-aluvia-xunidad.jpg"
        
    },
    {
        "id": 14,
        "nombre": "Bombillo Toledo 9w Dl Con Sensor Sylvania",
        "descripcion": "Bombilla LED en formato bulbo para iluminación domestica con sensor de movimiento incorporado, su tecnología y diseño proporciona una mejor iluminación interior. Ahorra hasta el 90% de energía comparado con bombillas incandescentes.",
        "category": "hogar",
        "stock": 80,
        "precio": 16000,
        "img": "../img/bombillo-toledo-9w-dl-con-sensor-sylvania.jpg"
    },
    {
        "id": 15,
        "nombre": "Cinta N° 23 Aislante Autofundente 18mmx9.1m",
        "descripcion": "Cinta eléctrica autofundente profesional scotch para alto voltaje.",
        "category": "herramientas-y-maquinaria",
        "stock": 80,
        "precio": 20000,
        "img": "../img/cinta-n-23-aislante-autofundente-18mmx91m-3m.jpg"
        
    }
    ]


export const getProducts=(categoryId)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsByCategory=(categoryId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(products.category === categoryId))
        },500)
    })
}

export const getProductsById=(id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(products.id === id))
        },500)
    })
}
