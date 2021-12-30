import "./WeddingGallery.css";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  loop: true,
  autoplay: {
    delay: 7000,
  },
};

export const WeddingGallery: React.FC = () => (
  <IonContent>
    <IonSlides options={slideOpts}>
      <IonSlide className="color-gray">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/DSC09724.png`}></IonImg>
            </IonCol>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/DSC09714.png`}></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide className="color-green">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/1.webp`}></IonImg>
            </IonCol>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/2.webp`}></IonImg>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/3.webp`}></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
    </IonSlides>
  </IonContent>
);
