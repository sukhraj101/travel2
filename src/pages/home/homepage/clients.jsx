import React from 'react';

const clients = [
  {
    id: 1,
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/200x200/img11.png',
    altText: 'Image Description'
  },
  {
    id: 2,
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/200x200/img12.png',
    altText: 'Image Description'
  },
  {
    id: 3,
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/200x200/img13.png',
    altText: 'Image Description'
  },
  {
    id: 4,
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/200x200/img14.png',
    altText: 'Image Description'
  },
  {
    id: 5,
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/200x200/img15.png',
    altText: 'Image Description'
  }
];

const Clients = () => {
  return (
    <div className="clients-block clients-v1 border-bottom border-color-8">
      <div className="container space-1">
        <div className="row justify-content-between pb-lg-1 text-center text-md-left">
          {clients.map((client) => (
            <div key={client.id} className="col-12 col-md mb-5">
              <img className="img-fluid" src={client.imageUrl} alt={client.altText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
