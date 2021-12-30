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
  //   autoplay: {
  //     delay: 7000,
  //   },
};

export const WeddingGallery: React.FC = () => (
  <IonContent>
    <IonSlides options={slideOpts}>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/slide1/DSC09706.webp`}></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>02/09/2016 - lần đầu gặp nhau</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol size="8">
              <IonImg src={`assets/hinhcuoi/DSC09695.webp`}></IonImg>
            </IonCol>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/DSC09714.webp`}></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>02/09/2017 - chính thức tìm hiểu</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
    </IonSlides>
  </IonContent>
);
