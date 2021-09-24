import React from 'react';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};
export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};
export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <React.Fragment>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map((img, index) => {
        return (
          <img key={`photo-${index}`} src={img.url} alt={place.name}></img>
        );
      })}
    </React.Fragment>
  );
}
