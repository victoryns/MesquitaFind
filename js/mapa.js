function inicializarMapa() {
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: -22.7709, lng: -43.4312 }, // Mesquita-RJ
    zoom: 13,
  });

  const infracoes = JSON.parse(localStorage.getItem("infracoes")) || [];

  infracoes.forEach((inf) => {
    if (inf.lat && inf.lng) {
      const marker = new google.maps.Marker({
        position: { lat: inf.lat, lng: inf.lng },
        map: mapa,
        title: `${inf.tipo} - ${inf.nome}`,
      });

      const info = new google.maps.InfoWindow({
        content: `
          <strong>${inf.nome}</strong><br>
          <em>${inf.tipo}</em><br>
          ${new Date(inf.data).toLocaleString()}
        `,
      });

      marker.addListener("click", () => info.open(mapa, marker));
    }
  });
}
