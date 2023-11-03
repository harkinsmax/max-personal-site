import { FC, useEffect, useRef, useState } from "react";
import styles from "./photoGallery.module.scss";
import { resolveClassName } from "../../utils/utils";

export interface IPhotoResource {
  url: string,
  caption: string,
  alt: string,
}

interface IProps {
  photos: IPhotoResource[];
}


const Card: FC<IProps> = (props) => {
  const { photos } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveringRef.current) {
        setSelectedIndex(index => (index + 1) % (photos.length));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) =>
        <div
          onMouseEnter={() => isHoveringRef.current = true}
          onMouseLeave={() => isHoveringRef.current = false}
          key={index}
          className={resolveClassName({ [styles.photoContent]: true, [styles.selected]: selectedIndex === index })}
        >
          <img src={photo.url} alt={photo.alt} className={styles.galleryImg} />
          <div className={styles.caption}>{photo.caption}</div>
        </div>
      )}
    </div>
  );
};

export default Card;