export async function getdatos() {
  const url = "https://servicedeb.onrender.com/api/lisreserva";
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

// no necesariamente tiene q llamarrse como en la DB. ejemplo:id
export async function DeleteReserva(id, nombre) {
  try {
    let res = await fetch("https://servicedeb.onrender.com/api/eliminar", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({
        id: id,
        nombre: nombre,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Eliminado con exito");
      location.reload(); //refresca la pagina pa borrar de la taal el registro es temporal
    } else {
      console.log("error al al eliminar ");
    }
  } catch (err) {
    console.log(err);
  }
}

// servicio pa actualizar estado de las reservas
export async function updateReservas(id, estado, estadoo) {
  try {
    let res = await fetch("https://servicedeb.onrender.com/api/update", {
      headers: { "Content-Type": "application/json" },
      method: "PUT", //por que afecto solo 3 campos
      body: JSON.stringify({
        id: id,
        estado: estado,
        estadoo: estadoo,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Enviadoo con exito");
      location.reload();
    } else {
      console.log("error al enviar ");
    }
  } catch (err) {
    console.log(err);
  }
}

// servicio pa actualizar estado anulado
export async function anularReservas(id, estado, estadoo) {
  try {
    let res = await fetch("https://servicedeb.onrender.com/api/anular", {
      headers: { "Content-Type": "application/json" },
      method: "PUT", //por que afecto solo 3 campos
      body: JSON.stringify({
        id: id,
        estado: estado,
        estadoo: estadoo,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Enviadoo con exito");
      location.reload();
    } else {
      console.log("error al enviar ");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function pendienteReservas(id, estado, estadoo) {
  try {
    let res = await fetch("https://servicedeb.onrender.com/api/pendiente", {
      headers: { "Content-Type": "application/json" },
      method: "PUT", //por que afecto solo 3 campos
      body: JSON.stringify({
        id: id,
        estado: estado,
        estadoo: estadoo,
      }),
    });
    await res.json();
    if (res.status === 201) {
      console.log("Enviadoo con exito");
      location.reload();
    } else {
      console.log("error al enviar ");
    }
  } catch (err) {
    console.log(err);
  }
}